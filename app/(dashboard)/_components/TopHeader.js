import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
    return (
        <div className='flex p-5 border-b border-gray-600 item-center justify-between md:justify-end'>
            <AlignJustify className='md:hidden'/>
            <div className='flex items-center gap-1 md:hidden'>
                <Image src='/logo.png' width={60} height={50} alt='Logo'/>
                <span className="text-xl font-semibold text-teal-700">WebShare</span>
            </div>
            <UserButton/>
        </div>
    )
}

export default TopHeader