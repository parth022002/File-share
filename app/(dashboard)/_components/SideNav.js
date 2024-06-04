'use client'

import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideNav() {
    const menuList=[
        {
            id:1,
            name:'Upload',
            icon:Upload,
            path:'/upload'
        },
        
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        },
        
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        }
    ]

    const [activeIndex,setActiveIndex]=useState(0);
    
    return (
        <div className='shadow-sm border-r border-gray-600 h-full'>
            <div className='p-3 border-b border-gray-600 flex items-center gap-2'>
                <Image src='/logo.png' width={60} height={50} alt='Logo'/>
                <span className="text-xl font-semibold text-teal-700">WebShare</span>
            </div>
            <div className='flex flex-col float-left w-full text-gray-300'>
            {menuList.map((item,index)=>(
                <button className={`flex gap-2 p-4 px-6 hover:bg-gray-500 w-full text-gray-100
                ${activeIndex===index? 'bg-blue-200 text-primary':null}`}
                onClick={()=>setActiveIndex(index)}
                >
                    <item.icon/>
                    <h2>
                        {item.name}
                    </h2>
                </button>
            ))}
            </div>
        </div>
    )
}

export default SideNav