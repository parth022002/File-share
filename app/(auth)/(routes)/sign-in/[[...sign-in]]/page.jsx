import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <Image src='/bg4.jpg' layout="fill" objectFit="cover" alt="WebShare Background" />
                    

                    <div className="hidden lg:relative lg:block lg:px-12 lg:p-6">
                    <a className="block text-white" href="#">
                            <span className="sr-only">Home</span>
                            <div className="flex items-center gap-2">
                            <span className="mt-6 text-2xl align-text-center font-bold text-white sm:text-3xl md:text-5xl">Welcome to WebShare </span>
                            <Image className=" lg:relative" src='/logo2.png' width={50} height={50} alt="WebShare Logo" />
                            </div>                            
                        </a>

                        <p className="mt-4 leading-relaxed text-white/90 lg:py-6">
                        Discover a seamless file sharing experience with WebShare, where simplicity meets innovation for users of all levels
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                                href="#"
                            >
                                <span className="sr-only">Home</span>
                                <div className="flex items-center gap-2">
                            <span className="mt-6 text-2xl align-text-center font-bold text-white sm:text-3xl md:text-5xl">Welcome to WebShare </span>
                            <Image className=" lg:relative" src='/logo2.png' width={50} height={50} alt="WebShare Logo" />
                            </div> 
                            </a>

                            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                            Discover a seamless file sharing experience with WebShare, where simplicity meets innovation for users of all levels
                            </p>
                        </div>

                        <SignIn />
                    </div>
                </main>
            </div>
        </section>
    );
}
