import React from 'react'

const ITHome = () => {
    return (
        <div className='relative h-screen overflow-hidden'>
            <img src="/Images/ITHome/undraw_Dev_productivity_re_fylf 1.png" className='absolute' />
            <div className="bg-hero-pattern bg-cover bg-no-repeat h-screen w-[1500px] mb-10">
                <img src="images/ITHome/Frame logout.png" className="w-[268px] h-[78px] absolute top-9 left-[35px]" />
                <div className="w-[530px] h-[109px] absolute top-[225px] left-[850px] bg-[#0059D5] border
        rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-7 border-[#0059D5]">
                    <a href="">مبني المعامل</a>
                </div>
                <div className="w-[530px] h-[109px] absolute top-[550px] left-[850px] bg-[#0059D5] border
        rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-7 border-[#0059D5]">
                    <a href="">مبني المدرجات</a>
                </div>
            </div>
        </div>
    )
}

export default ITHome