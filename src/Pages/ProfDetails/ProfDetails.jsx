import React from 'react'
import Header from '../../Components/Header/Header'
import TaProfBox from '../../Components/TaProfBox/TaProfBox'
import ScrollToTop from '../../UI/ScrollToTop'
import Navbar from '../../UI/Navbar'

const ProfDetails = () => {

    return (
        <div className='bg-[#C5D1F2] h-full'>
            <Navbar />
            <ScrollToTop />
            <Header title={"Professor's"} />
            <div className=' grid grid-cols-3 gap-y-14 place-items-center mt-8 pb-8'>
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Dr. Ahmed Hosny"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/logo image.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
            </div>
        </div>
    )
}

export default ProfDetails