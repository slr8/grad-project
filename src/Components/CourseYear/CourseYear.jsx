import React from 'react'

const CourseYear = ({ img, img2, title }) => {
    return (
        <div className='relative'>
            <img src={img} className='absolute w-[600px] top-0 right-0' />
            <div className='flex justify-center items-center flex-col gap-4 relative '>
                <img src={img2} className='w-20' />
                <span>{title}</span>
            </div>
        </div>
    )
}

export default CourseYear