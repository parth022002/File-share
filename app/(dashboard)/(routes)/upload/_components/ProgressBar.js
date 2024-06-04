import React from 'react'

function ProgressBar({progress}) {
    return (
        <div className='bg-gray-300 w-full  mt-3 h-4 rounded-full text-black'>
            <div className=' bg-primary text-[13px] h-4 rounded-full font-bold '
            style={{width:`${progress}%`}}>
            {`${Number(progress).toFixed(0)}%`}
            </div>
        </div>
    )
}

export default ProgressBar