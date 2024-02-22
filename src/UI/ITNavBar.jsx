import React from 'react'
import { Link } from 'react-router-dom'

const ITNavBar = () => {
    return (
        <nav>
            <div className="w-full mx-auto flex justify-between items-center bg-[#ffff] mb-3">
                <div className="flex items-center  ml-[30px] ">
                    <img src="/Images/Navbar/Polygon 1.png" alt="Logo" className="mr-2 h-9 pt-2" />
                    <span className="text-[#0060E4] font-bold text-[35px] font-moichiy">FCI AUN</span>
                </div >
                <ul className="flex space-x-8 items-center pt-4  justify-around ml-[8px] font-bold mr-5 ">
                    <Link to={"/"}> <li className="text-[#0060E4] ml-[20px] text-[25px] focus text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[150px] h-[40px] rounded-lg" >Home</li></Link>
                    <Link to={"/itHome/itlabs"}> <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg">Laboratories</li ></Link>
                    <Link to={"/itHome/ithalls"}> <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[150px] h-[40px] rounded-lg">Halls</li ></Link>
                    <Link to={""}> <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg">About us </li></Link>
                    <Link to={"/contactus"}> <li className="text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[160px] h-[40px] rounded-lg">Contact us</li></Link>
                </ul>
            </div >
        </nav >
    )
}

export default ITNavBar