import React from 'react'
import TaProfBox from '../../Components/TaProfBox/TaProfBox'
import Header from '../../Components/Header/Header'
import ScrollToTop from '../../UI/ScrollToTop'

const TADetails = () => {
    return (
        <div className='bg-[#C5D1F2] h-full'>
            <ScrollToTop />
            <Header title={"TA's"} />
            <div className=' grid grid-cols-3 gap-y-14 place-items-center mt-8 pb-8'>
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
                <TaProfBox
                    name={"Eng. Omnia Ahmed"}
                    dep={"CS Department"}
                    img={'/Images/TaProfDetails/7_1-removebg-preview.png'}
                    info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus."}
                />
            </div>
        </div>)
}

export default TADetails