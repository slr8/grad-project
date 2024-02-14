import React from 'react'
import Header from '../../Components/Header/Header'
import CourseYear from '../../Components/CourseYear/CourseYear'

const Courses = () => {
    return (
        <div class="bg-[#0060E430] h-screen">
            <Header title={'Courses'} />
            <div className='flex justify-center items-center gap-[30rem]'>
                <div>
                    <CourseYear
                        img={'/Images/Courses/blob-haikei_1-removebg-preview.png'}
                        img2={'/Images/Courses/🦆 icon _bug_.png'}
                        title={"First year"}
                    />
                    <CourseYear
                        img={'/Images/Courses/blob-haikei_1-removebg-preview.png'}
                        img2={'/Images/Courses/🦆 icon _bug_.png'}
                        title={"First year"}
                    />
                </div>
                <div>
                    <CourseYear
                        img={'/Images/Courses/blob-haikei_1-removebg-preview.png'}
                        img2={'/Images/Courses/🦆 icon _bug_.png'}
                        title={"First year"}
                    />
                    <CourseYear
                        img={'/Images/Courses/blob-haikei_1-removebg-preview.png'}
                        img2={'/Images/Courses/🦆 icon _bug_.png'}
                        title={"First year"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Courses