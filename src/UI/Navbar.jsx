import React, { useState } from 'react'

const Navbar = () => {
    const [otherLinks, setOtherLinks] = useState(false)
    function handleClick(e) {
        e.preventDefault()
        setOtherLinks(!otherLinks)
    }
    return (
        <>
            <nav>
                <div className="w-full mx-auto flex justify-between items-center bg-[#ffff] mb-3">
                    <div className="flex items-center  ml-[30px] ">
                        <img src="/Images/Navbar/Polygon 1.png" alt="Logo" className="mr-2 h-9 pt-2" />
                        <span className="text-[#0060E4] font-bold text-[35px] font-moichiy">FCI AUN</span>
                    </div >
                    <ul className="flex space-x-10 items-center pt-4  justify-around ml-[40px]  pr-[100px] font-bold ">
                        <li className={`text-[#0060E4] ml-[20px] text-[25px] focus text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg`} > Home</li>
                        <li onClick={handleClick} className="text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px]   rounded-lg">Other Links</li >
                        <li className="text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg ">About us </li>
                        <li className="text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg">Contact us</li>
                    </ul>
                    <div className={`w-[800px] ${otherLinks ? 'h-[330px]' : 'h-0'} transition-all delay-75 rounded-3 bg-[#DAE4F4] absolute top-[68px] mx-auto inset-0 flex justify-start bg-[#DAE4F4FC] rounded-b-xl`}>
                        {otherLinks && (
                            <>
                                <div>
                                    <img src="/Images/Navbar/wallpaper.png" alt="logo" className="w-[398px] h-[350px]" />
                                </div>
                                <ul className={`pt-[25px] ml-[80px]  delay-100 transition-all`}>
                                    <div className="flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/1.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Prosessor</li>
                                    </div>
                                    <div className="flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/2.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F] text-[22px] font-bold">Teaching Assistnt </li>
                                    </div>
                                    <div className="flex  mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/3 book.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Courses</li>
                                    </div>
                                    <div className="flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold"> schedule</li>
                                    </div>
                                    <div className="flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer">
                                        <img src="/Images/Navbar/5.png" alt="logo" className=" h-[45px]" />
                                        <li className="text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold">Materials</li>
                                    </div>
                                </ul>
                            </>
                        )}
                    </div>
                </div >
            </nav >
        </>
    )
}

export default Navbar