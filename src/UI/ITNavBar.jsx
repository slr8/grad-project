import React from 'react'

const ITNavBar = () => {
    return (
        <nav>
            <div className="w-full mx-auto flex justify-between items-center bg-[#ffff] mb-3">
                <div className="flex items-center  ml-[30px] ">
                    <img src="/Images/Navbar/Polygon 1.png" alt="Logo" className="mr-2 h-9 pt-2" />
                    <span className="text-[#0060E4] font-bold text-[35px] font-moichiy">FCI AUN</span>
                </div >
                <ul className="flex space-x-8 items-center pt-4  justify-around ml-[8px] font-bold mr-5 ">
                    <li className="text-[#0060E4] ml-[20px] text-[25px] focus text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[150px] h-[40px] rounded-lg" >Home</li>
                    <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg">Laboratories</li >
                    <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[150px] h-[40px] rounded-lg">Halls</li >
                    <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg">About us </li>
                    <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[160px] h-[40px] rounded-lg">Contact us</li>
                </ul>
            </div >
        </nav >
    )
}

export default ITNavBar