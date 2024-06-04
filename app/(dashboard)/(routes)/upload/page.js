"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from '@/firebaseConfig'
import { doc, getFirestore, setDoc, setFileDocId } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/app/_utlis/GenerateRandomString';
import AlertMessage from './_components/uploadmessage';
import { useRouter } from 'next/navigation';

function Upload() {

    const {user}=useUser();
    const [progress, setProgress] = useState();
    const router= useRouter();
    const [uploadCompleted, setUploadCompleted] = useState(false);
    const db = getFirestore(app);
    const storage = getStorage(app)
    const [fileDocId,setFileDocId]=useState();
    const uploadFile = (file) => {

        const metadata = {
            contentType: file.type
        };

        const storageRef = ref(storage, 'file-upload/' + file.name);

        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

                setProgress(progress);

                // Upload completed successfully, now we can get the download URL
                progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        saveInfo(file,downloadURL);
                });
                }
            );
    }

    const saveInfo =async(file,fileUrl) => {
        const docId = generateRandomString().toString();
        setFileDocId(docId);
        await setDoc(doc(db, "uploadedFile", docId), {
            fileName:file?.name,
            fileSize:file?.size,
            fileType:file?.type,
            fileUrl:fileUrl,
            userEmail:user?.primaryEmailAddress.emailAddress,
            userName:user?.fullName,
            password:'',
            id:docId,
            shortUrl:process.env.NEXT_PUBLIC_BASE_URL+docId
        });
    }

    useEffect(()=>{
        console.log("Trigger")

        progress==100&& setTimeout(()=>{
            setUploadCompleted(true);
        },2000)
    },[progress==100]
    );

    useEffect(()=>{
        uploadCompleted&&
        setTimeout(()=>{
            setUploadCompleted(false);
            console.log("FileDocId",fileDocId)
            router.push('/file-preview/'+fileDocId);
        },3000)
    },[uploadCompleted==true])

    return (
        <div className='p-5 px-8 md:px-28 text-center'>
            {!uploadCompleted?<div>
                <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-[20px] text-center m-5 font-extrabold text-transparent sm:text-5xl py-1">Start Uploading File and Share it</h2>
            <UploadForm uploadBtnClick={(file) => uploadFile(file)} 
            progress={progress} /></div>:<AlertMessage/> }
            
        </div>
    )
}

export default Upload