import { useSelector } from 'react-redux'
import FifthColumnCell from '../../Components/UserCells/FifthColumnCell/FifthColumnCell'
import FirstColumnCell from '../../Components/UserCells/FirstColumnCell/FirstColumnCell'
import FourthColumnCell from '../../Components/UserCells/FourthColumnCell/FourthColumnCell'
import SecondColumnCell from '../../Components/UserCells/SecondColumnCell/SecondColumnCell'
import ThirdColumnCell from '../../Components/UserCells/ThirdColumnCell/ThirdColumnCell'
import ScrollToTop from '../../UI/ScrollToTop'
import './schedule.css'


const appointments = {
    "appointments": [
        {
            "subjectName": "Mathematics",
            "doctorName": "Dr. Smith",
            "day": "sunday",
            "startTime": "11:00",
            "duration": 3
        },
        {
            "subjectName": "History",
            "doctorName": "Dr. Johnson",
            "day": "sunday",
            "startTime": "9:00",
            "duration": 2
        },
        {
            "subjectName": "History",
            "doctorName": "Dr. Johnson",
            "day": "sunday",
            "startTime": "8:00",
            "duration": 1
        },
        {
            "subjectName": "Physics",
            "doctorName": "Dr. Davis",
            "day": "sunday",
            "startTime": "14:00",
            "duration": 4
        },
        {
            "subjectName": "English",
            "doctorName": "Dr. Wilson",
            "day": "sunday",
            "startTime": "18:00",
            "duration": 2
        }
    ]
};

// const sunday8 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "8:00");
// const sunday9 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "9:00");
// const sunday10 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "10:00");
// const sunday11 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "11:00");
// const sunday12 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "12:00");
// const sunday13 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "13:00");
// const sunday14 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "14:00");
// const sunday15 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "15:00");
// const sunday16 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "16:00");
// const sunday17 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "17:00");
// const sunday18 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "18:00");
// const sunday19 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "19:00");

const generateAppointments = (day, start, end) => {
    const appointmentsObj = {};
    for (let i = start; i <= end; i++) {
        const appointmentKey = `${day.toLowerCase()}${i}`;
        appointmentsObj[appointmentKey] = appointments.appointments.find(appointment =>
            appointment.day.toLowerCase() === day.toLowerCase() && appointment.startTime === `${i}:00`
        );
    }

    return appointmentsObj;
};
const { sunday8, sunday9, sunday10, sunday11, sunday12, sunday13, sunday14, sunday15, sunday16, sunday17, sunday18, sunday19 } = generateAppointments("Sunday", 8, 19);
const { monday8, monday9, monday10, monday11, monday12, monday13, monday14, monday15, monday16, monday17, monday18, monday19 } = generateAppointments("Monday", 8, 19);
const { tuesday8, tuesday9, tuesday10, tuesday11, tuesday12, tuesday13, tuesday14, tuesday15, tuesday16, tuesday17, tuesday18, tuesday19 } = generateAppointments("Tuesday", 8, 19);
const { wednesday8, wednesday9, wednesday10, wednesday11, wednesday12, wednesday13, wednesday14, wednesday15, wednesday16, wednesday17, wednesday18, wednesday19 } = generateAppointments("Wednesday", 8, 19);
const { thursday8, thursday9, thursday10, thursday11, thursday12, thursday13, thursday14, thursday15, thursday16, thursday17, thursday18, thursday19 } = generateAppointments("Thursday", 8, 19);

const Schedule = () => {
    const username = useSelector((state) => state.user.username)
    return (
        <div className='bg-[#0060E42B]'>
            <ScrollToTop />
            <div className='flex justify-between px-20 items-center'>
                <img src="/Images/Schedule/Assiut_University_logo 1.png" className='w-[100px]' />
                <span className='text-[#0060E4] text-[50px] font-semibold'>د/ {username}</span>
                <img src="/Images/Schedule/fci.png" className='w-[140px] h-36' />
            </div>
            <div>
                <div>
                    <table>
                        <thead>
                            <tr className='sticky top-0'>
                                <th></th>
                                <th>Sunday</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='time'>08:00 - 09:00</td>
                                <td rowSpan={sunday8?.duration}>
                                    {sunday8 &&
                                        <FirstColumnCell
                                            doc={"Ahmed hosney"}
                                            subject={"Network"}
                                            place={"3A"}
                                            height={sunday8.duration === 1 ? 'one-duration' : sunday8.duration === 2 ? 'two-duration' : sunday8.duration === 3 ? 'three-duration' : sunday8.duration === 4 ? 'four-duration' : "one-duration"}
                                        />
                                    }
                                </td>
                                <td rowSpan={monday8?.duration}>
                                    {monday8 &&
                                        <SecondColumnCell
                                            doc={"Ahmed hosney"}
                                            subject={"Network"}
                                            place={"3A"}
                                            height={monday8.duration === 1 ? 'one-duration' : monday8.duration === 2 ? 'two-duration' : monday8.duration === 3 ? 'three-duration' : monday8.duration === 4 ? 'four-duration' : "one-duration"}
                                        />
                                    }
                                </td>
                                <td rowSpan={tuesday8?.duration}>
                                    {tuesday8 &&
                                        <ThirdColumnCell
                                            doc={"Ahmed hosney"}
                                            subject={"Network"}
                                            place={"3A"}
                                            height={tuesday8.duration === 1 ? 'one-duration' : tuesday8.duration === 2 ? 'two-duration' : tuesday8.duration === 3 ? 'three-duration' : tuesday8.duration === 4 ? 'four-duration' : "one-duration"}
                                        />
                                    }
                                </td>
                                <td rowSpan={wednesday8?.duration}>
                                    {wednesday8 &&
                                        <FourthColumnCell
                                            doc={"Ahmed hosney"}
                                            subject={"Network"}
                                            place={"3A"}
                                            height={wednesday8.duration === 1 ? 'one-duration' : wednesday8.duration === 2 ? 'two-duration' : wednesday8.duration === 3 ? 'three-duration' : wednesday8.duration === 4 ? 'four-duration' : "one-duration"}
                                        />
                                    }
                                </td>
                                <td rowSpan={thursday8?.duration}>
                                    {thursday8 &&
                                        <FifthColumnCell
                                            doc={"Ahmed hosney"}
                                            subject={"Network"}
                                            place={"3A"}
                                            height={thursday8.duration === 1 ? 'one-duration' : thursday8.duration === 2 ? 'two-duration' : thursday8.duration === 3 ? 'three-duration' : thursday8.duration === 4 ? 'four-duration' : "one-duration"}
                                        />
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className='time'>09:00 - 10:00</td>
                                {sunday8?.duration >= 2 ? null :
                                    <td rowSpan={sunday9?.duration}>
                                        {sunday9 &&
                                            <FirstColumnCell
                                                doc={sunday9.doctorName}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday9.duration === 1 ? 'one-duration' : sunday9.duration === 2 ? 'two-duration' : sunday9.duration === 3 ? 'three-duration' : sunday9.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday8?.duration >= 2 ? null :
                                    <td rowSpan={monday9?.duration}>
                                        {monday9 &&
                                            <SecondColumnCell
                                                doc={monday9.doctorName}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday9.duration === 1 ? 'one-duration' : monday9.duration === 2 ? 'two-duration' : monday9.duration === 3 ? 'three-duration' : monday9.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday8?.duration >= 2 ? null :
                                    <td rowSpan={tuesday9?.duration}>
                                        {tuesday9 &&
                                            <ThirdColumnCell
                                                doc={tuesday9.doctorName}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday9.duration === 1 ? 'one-duration' : tuesday9.duration === 2 ? 'two-duration' : tuesday9.duration === 3 ? 'three-duration' : tuesday9.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday8?.duration >= 2 ? null :
                                    <td rowSpan={wednesday9?.duration}>
                                        {wednesday9 &&
                                            <FourthColumnCell
                                                doc={wednesday9.doctorName}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday9.duration === 1 ? 'one-duration' : wednesday9.duration === 2 ? 'two-duration' : wednesday9.duration === 3 ? 'three-duration' : wednesday9.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday8?.duration >= 2 ? null :
                                    <td rowSpan={thursday9?.duration}>
                                        {thursday9 &&
                                            <FifthColumnCell
                                                doc={thursday9.doctorName}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday9.duration === 1 ? 'one-duration' : thursday9.duration === 2 ? 'two-duration' : thursday9.duration === 3 ? 'three-duration' : thursday9.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr>
                            <tr>
                                <td className='time'>10:00 - 11:00</td>
                                {sunday8?.duration >= 3 || sunday9?.duration >= 2 ? null :
                                    <td rowSpan={sunday10?.duration}>
                                        {sunday10 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday10.duration === 1 ? 'one-duration' : sunday10.duration === 2 ? 'two-duration' : sunday10.duration === 3 ? 'three-duration' : sunday10.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday8?.duration >= 3 || monday9?.duration >= 2 ? null :
                                    <td rowSpan={monday10?.duration}>
                                        {monday10 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday10.duration === 1 ? 'one-duration' : monday10.duration === 2 ? 'two-duration' : monday10.duration === 3 ? 'three-duration' : monday10.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday8?.duration >= 3 || tuesday9?.duration >= 2 ? null :
                                    <td rowSpan={tuesday10?.duration}>
                                        {tuesday10 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday10.duration === 1 ? 'one-duration' : tuesday10.duration === 2 ? 'two-duration' : tuesday10.duration === 3 ? 'three-duration' : tuesday10.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday8?.duration >= 3 || wednesday9?.duration >= 2 ? null :
                                    <td rowSpan={wednesday10?.duration}>
                                        {wednesday10 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday10.duration === 1 ? 'one-duration' : wednesday10.duration === 2 ? 'two-duration' : wednesday10.duration === 3 ? 'three-duration' : wednesday10.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday8?.duration >= 3 || thursday9?.duration >= 2 ? null :
                                    <td rowSpan={thursday10?.duration}>
                                        {thursday10 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday10.duration === 1 ? 'one-duration' : thursday10.duration === 2 ? 'two-duration' : thursday10.duration === 3 ? 'three-duration' : thursday10.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>11:00 - 12:00</td>
                                {sunday8?.duration >= 4 || sunday9?.duration >= 3 || sunday10?.duration >= 2 ? null :
                                    <td rowSpan={sunday11?.duration}>
                                        {sunday11 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday11.duration === 1 ? 'one-duration' : sunday11.duration === 2 ? 'two-duration' : sunday11.duration === 3 ? 'three-duration' : sunday11.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday8?.duration >= 4 || monday9?.duration >= 3 || monday10?.duration >= 2 ? null :
                                    <td rowSpan={monday11?.duration}>
                                        {monday11 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday11.duration === 1 ? 'one-duration' : monday11.duration === 2 ? 'two-duration' : monday11.duration === 3 ? 'three-duration' : monday11.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday8?.duration >= 4 || tuesday9?.duration >= 3 || tuesday10?.duration >= 2 ? null :
                                    <td rowSpan={tuesday11?.duration}>
                                        {tuesday11 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday11.duration === 1 ? 'one-duration' : tuesday11.duration === 2 ? 'two-duration' : tuesday11.duration === 3 ? 'three-duration' : tuesday11.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday8?.duration >= 4 || wednesday9?.duration >= 3 || wednesday10?.duration >= 2 ? null :
                                    <td rowSpan={wednesday11?.duration}>
                                        {wednesday11 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday11.duration === 1 ? 'one-duration' : wednesday11.duration === 2 ? 'two-duration' : wednesday11.duration === 3 ? 'three-duration' : wednesday11.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday8?.duration >= 4 || thursday9?.duration >= 3 || thursday10?.duration >= 2 ? null :
                                    <td rowSpan={thursday11?.duration}>
                                        {thursday11 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday11.duration === 1 ? 'one-duration' : thursday11.duration === 2 ? 'two-duration' : thursday11.duration === 3 ? 'three-duration' : thursday11.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>12:00 - 13:00</td>
                                {sunday9?.duration >= 4 || sunday10?.duration >= 3 || sunday11?.duration >= 2 ? null :
                                    <td rowSpan={sunday12?.duration}>
                                        {sunday12 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday12.duration === 1 ? 'one-duration' : sunday12.duration === 2 ? 'two-duration' : sunday12.duration === 3 ? 'three-duration' : sunday12.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday9?.duration >= 4 || monday10?.duration >= 3 || monday11?.duration >= 2 ? null :
                                    <td rowSpan={monday12?.duration}>
                                        {monday12 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday12.duration === 1 ? 'one-duration' : monday12.duration === 2 ? 'two-duration' : monday12.duration === 3 ? 'three-duration' : monday12.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday9?.duration >= 4 || tuesday10?.duration >= 3 || tuesday11?.duration >= 2 ? null :
                                    <td rowSpan={tuesday12?.duration}>
                                        {tuesday12 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday12.duration === 1 ? 'one-duration' : tuesday12.duration === 2 ? 'two-duration' : tuesday12.duration === 3 ? 'three-duration' : tuesday12.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday9?.duration >= 4 || wednesday10?.duration >= 3 || wednesday11?.duration >= 2 ? null :
                                    <td rowSpan={wednesday12?.duration}>
                                        {wednesday12 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday12.duration === 1 ? 'one-duration' : wednesday12.duration === 2 ? 'two-duration' : wednesday12.duration === 3 ? 'three-duration' : wednesday12.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday9?.duration >= 4 || thursday10?.duration >= 3 || thursday11?.duration >= 2 ? null :
                                    <td rowSpan={thursday12?.duration}>
                                        {thursday12 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday12.duration === 1 ? 'one-duration' : thursday12.duration === 2 ? 'two-duration' : thursday12.duration === 3 ? 'three-duration' : thursday12.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>13:00 - 14:00</td>
                                {sunday10?.duration >= 4 || sunday11?.duration >= 3 || sunday12?.duration >= 2 ? null :
                                    <td rowSpan={sunday13?.duration}>
                                        {sunday13 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday13.duration === 1 ? 'one-duration' : sunday13.duration === 2 ? 'two-duration' : sunday13.duration === 3 ? 'three-duration' : sunday13.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday10?.duration >= 4 || monday11?.duration >= 3 || monday12?.duration >= 2 ? null :
                                    <td rowSpan={monday13?.duration}>
                                        {monday13 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday13.duration === 1 ? 'one-duration' : monday13.duration === 2 ? 'two-duration' : monday13.duration === 3 ? 'three-duration' : monday13.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday10?.duration >= 4 || tuesday11?.duration >= 3 || tuesday12?.duration >= 2 ? null :
                                    <td rowSpan={tuesday13?.duration}>
                                        {tuesday13 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday13.duration === 1 ? 'one-duration' : tuesday13.duration === 2 ? 'two-duration' : tuesday13.duration === 3 ? 'three-duration' : tuesday13.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday10?.duration >= 4 || wednesday11?.duration >= 3 || wednesday12?.duration >= 2 ? null :
                                    <td rowSpan={wednesday13?.duration}>
                                        {wednesday13 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday13.duration === 1 ? 'one-duration' : wednesday13.duration === 2 ? 'two-duration' : wednesday13.duration === 3 ? 'three-duration' : wednesday13.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday10?.duration >= 4 || thursday11?.duration >= 3 || thursday12?.duration >= 2 ? null :
                                    <td rowSpan={thursday13?.duration}>
                                        {thursday13 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday13.duration === 1 ? 'one-duration' : thursday13.duration === 2 ? 'two-duration' : thursday13.duration === 3 ? 'three-duration' : thursday13.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>14:00 - 15:00</td>
                                {sunday11?.duration >= 4 || sunday12?.duration >= 3 || sunday13?.duration >= 2 ? null :
                                    <td rowSpan={sunday14?.duration}>
                                        {sunday14 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday14.duration === 1 ? 'one-duration' : sunday14.duration === 2 ? 'two-duration' : sunday14.duration === 3 ? 'three-duration' : sunday14.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday11?.duration >= 4 || monday12?.duration >= 3 || monday13?.duration >= 2 ? null :
                                    <td rowSpan={monday14?.duration}>
                                        {monday14 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday14.duration === 1 ? 'one-duration' : monday14.duration === 2 ? 'two-duration' : monday14.duration === 3 ? 'three-duration' : monday14.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday11?.duration >= 4 || tuesday12?.duration >= 3 || tuesday13?.duration >= 2 ? null :
                                    <td rowSpan={tuesday14?.duration}>
                                        {tuesday14 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday14.duration === 1 ? 'one-duration' : tuesday14.duration === 2 ? 'two-duration' : tuesday14.duration === 3 ? 'three-duration' : tuesday14.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday11?.duration >= 4 || wednesday12?.duration >= 3 || wednesday13?.duration >= 2 ? null :
                                    <td rowSpan={wednesday14?.duration}>
                                        {wednesday14 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday14.duration === 1 ? 'one-duration' : wednesday14.duration === 2 ? 'two-duration' : wednesday14.duration === 3 ? 'three-duration' : wednesday14.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday11?.duration >= 4 || thursday12?.duration >= 3 || thursday13?.duration >= 2 ? null :
                                    <td rowSpan={thursday14?.duration}>
                                        {thursday14 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday14.duration === 1 ? 'one-duration' : thursday14.duration === 2 ? 'two-duration' : thursday14.duration === 3 ? 'three-duration' : thursday14.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>15:00 - 16:00</td>
                                {sunday12?.duration >= 4 || sunday13?.duration >= 3 || sunday14?.duration >= 2 ? null :
                                    <td rowSpan={sunday15?.duration}>
                                        {sunday15 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday15.duration === 1 ? 'one-duration' : sunday15.duration === 2 ? 'two-duration' : sunday15.duration === 3 ? 'three-duration' : sunday15.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday12?.duration >= 4 || monday13?.duration >= 3 || monday14?.duration >= 2 ? null :
                                    <td rowSpan={monday15?.duration}>
                                        {monday15 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday15.duration === 1 ? 'one-duration' : monday15.duration === 2 ? 'two-duration' : monday15.duration === 3 ? 'three-duration' : monday15.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday12?.duration >= 4 || tuesday13?.duration >= 3 || tuesday14?.duration >= 2 ? null :
                                    <td rowSpan={tuesday15?.duration}>
                                        {tuesday15 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday15.duration === 1 ? 'one-duration' : tuesday15.duration === 2 ? 'two-duration' : tuesday15.duration === 3 ? 'three-duration' : tuesday15.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday12?.duration >= 4 || wednesday13?.duration >= 3 || wednesday14?.duration >= 2 ? null :
                                    <td rowSpan={wednesday15?.duration}>
                                        {wednesday15 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday15.duration === 1 ? 'one-duration' : wednesday15.duration === 2 ? 'two-duration' : wednesday15.duration === 3 ? 'three-duration' : wednesday15.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday12?.duration >= 4 || thursday13?.duration >= 3 || thursday14?.duration >= 2 ? null :
                                    <td rowSpan={thursday15?.duration}>
                                        {thursday15 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday15.duration === 1 ? 'one-duration' : thursday15.duration === 2 ? 'two-duration' : thursday15.duration === 3 ? 'three-duration' : thursday15.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>16:00 - 17:00</td>
                                {sunday13?.duration >= 4 || sunday14?.duration >= 3 || sunday15?.duration >= 2 ? null :
                                    <td rowSpan={sunday16?.duration}>
                                        {sunday16 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday16.duration === 1 ? 'one-duration' : sunday16.duration === 2 ? 'two-duration' : sunday16.duration === 3 ? 'three-duration' : sunday16.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday13?.duration >= 4 || monday14?.duration >= 3 || monday15?.duration >= 2 ? null :
                                    <td rowSpan={monday16?.duration}>
                                        {monday16 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday16.duration === 1 ? 'one-duration' : monday16.duration === 2 ? 'two-duration' : monday16.duration === 3 ? 'three-duration' : monday16.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday13?.duration >= 4 || tuesday14?.duration >= 3 || tuesday15?.duration >= 2 ? null :
                                    <td rowSpan={tuesday16?.duration}>
                                        {tuesday16 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday16.duration === 1 ? 'one-duration' : tuesday16.duration === 2 ? 'two-duration' : tuesday16.duration === 3 ? 'three-duration' : tuesday16.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday13?.duration >= 4 || wednesday14?.duration >= 3 || wednesday15?.duration >= 2 ? null :
                                    <td rowSpan={wednesday16?.duration}>
                                        {wednesday16 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday16.duration === 1 ? 'one-duration' : wednesday16.duration === 2 ? 'two-duration' : wednesday16.duration === 3 ? 'three-duration' : wednesday16.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday13?.duration >= 4 || thursday14?.duration >= 3 || thursday15?.duration >= 2 ? null :
                                    <td rowSpan={thursday16?.duration}>
                                        {thursday16 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday16.duration === 1 ? 'one-duration' : thursday16.duration === 2 ? 'two-duration' : thursday16.duration === 3 ? 'three-duration' : thursday16.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>17:00 - 18:00</td>
                                {sunday14?.duration >= 4 || sunday15?.duration >= 3 || sunday16?.duration >= 2 ? null :
                                    <td rowSpan={sunday17?.duration}>
                                        {sunday17 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday17.duration === 1 ? 'one-duration' : sunday17.duration === 2 ? 'two-duration' : sunday17.duration === 3 ? 'three-duration' : sunday17.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday14?.duration >= 4 || monday15?.duration >= 3 || monday16?.duration >= 2 ? null :
                                    <td rowSpan={monday17?.duration}>
                                        {monday17 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday17.duration === 1 ? 'one-duration' : monday17.duration === 2 ? 'two-duration' : monday17.duration === 3 ? 'three-duration' : monday17.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday14?.duration >= 4 || tuesday15?.duration >= 3 || tuesday16?.duration >= 2 ? null :
                                    <td rowSpan={tuesday17?.duration}>
                                        {tuesday17 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday17.duration === 1 ? 'one-duration' : tuesday17.duration === 2 ? 'two-duration' : tuesday17.duration === 3 ? 'three-duration' : tuesday17.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday14?.duration >= 4 || wednesday15?.duration >= 3 || wednesday16?.duration >= 2 ? null :
                                    <td rowSpan={wednesday17?.duration}>
                                        {wednesday17 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday17.duration === 1 ? 'one-duration' : wednesday17.duration === 2 ? 'two-duration' : wednesday17.duration === 3 ? 'three-duration' : wednesday17.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday14?.duration >= 4 || thursday15?.duration >= 3 || thursday16?.duration >= 2 ? null :
                                    <td rowSpan={thursday17?.duration}>
                                        {thursday17 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday17.duration === 1 ? 'one-duration' : thursday17.duration === 2 ? 'two-duration' : thursday17.duration === 3 ? 'three-duration' : thursday17.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr><tr>
                                <td className='time'>18:00 - 19:00</td>
                                {sunday15?.duration >= 4 || sunday16?.duration >= 3 || sunday17?.duration >= 2 ? null :
                                    <td rowSpan={sunday18?.duration}>
                                        {sunday18 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday18.duration === 1 ? 'one-duration' : sunday18.duration === 2 ? 'two-duration' : sunday18.duration === 3 ? 'three-duration' : sunday18.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>
                                }
                                {monday15?.duration >= 4 || monday16?.duration >= 3 || monday17?.duration >= 2 ? null :
                                    <td rowSpan={monday18?.duration}>
                                        {monday18 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday18.duration === 1 ? 'one-duration' : monday18.duration === 2 ? 'two-duration' : monday18.duration === 3 ? 'three-duration' : monday18.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>
                                }
                                {tuesday15?.duration >= 4 || tuesday16?.duration >= 3 || tuesday17?.duration >= 2 ? null :
                                    <td rowSpan={tuesday18?.duration}>
                                        {tuesday18 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday18.duration === 1 ? 'one-duration' : tuesday18.duration === 2 ? 'two-duration' : tuesday18.duration === 3 ? 'three-duration' : tuesday18.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>
                                }
                                {wednesday15?.duration >= 4 || wednesday16?.duration >= 3 || wednesday17?.duration >= 2 ? null :
                                    <td rowSpan={wednesday18?.duration}>
                                        {wednesday18 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday18.duration === 1 ? 'one-duration' : wednesday18.duration === 2 ? 'two-duration' : wednesday18.duration === 3 ? 'three-duration' : wednesday18.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>
                                }
                                {thursday15?.duration >= 4 || thursday16?.duration >= 3 || thursday17?.duration >= 2 ? null :
                                    <td rowSpan={thursday18?.duration}>
                                        {thursday18 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday18.duration === 1 ? 'one-duration' : thursday18.duration === 2 ? 'two-duration' : thursday18.duration === 3 ? 'three-duration' : thursday18.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>
                                }
                            </tr><tr>
                                <td className='time'>19:00 - 20:00</td>
                                {sunday16?.duration >= 4 || sunday17?.duration >= 3 || sunday18?.duration >= 2 ? null :
                                    <td rowSpan={sunday19?.duration}>
                                        {sunday19 &&
                                            <FirstColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={sunday19.duration === 1 ? 'one-duration' : sunday19.duration === 2 ? 'two-duration' : sunday19.duration === 3 ? 'three-duration' : sunday19.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {monday16?.duration >= 4 || monday17?.duration >= 3 || monday18?.duration >= 2 ? null :
                                    <td rowSpan={monday19?.duration}>
                                        {monday19 &&
                                            <SecondColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={monday19.duration === 1 ? 'one-duration' : monday19.duration === 2 ? 'two-duration' : monday19.duration === 3 ? 'three-duration' : monday19.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {tuesday16?.duration >= 4 || tuesday17?.duration >= 3 || tuesday18?.duration >= 2 ? null :
                                    <td rowSpan={tuesday19?.duration}>
                                        {tuesday19 &&
                                            <ThirdColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={tuesday19.duration === 1 ? 'one-duration' : tuesday19.duration === 2 ? 'two-duration' : tuesday19.duration === 3 ? 'three-duration' : tuesday19.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {wednesday16?.duration >= 4 || wednesday17?.duration >= 3 || wednesday18?.duration >= 2 ? null :
                                    <td rowSpan={wednesday19?.duration}>
                                        {wednesday19 &&
                                            <FourthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={wednesday19.duration === 1 ? 'one-duration' : wednesday19.duration === 2 ? 'two-duration' : wednesday19.duration === 3 ? 'three-duration' : wednesday19.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                                {thursday16?.duration >= 4 || thursday17?.duration >= 3 || thursday18?.duration >= 2 ? null :
                                    <td rowSpan={thursday19?.duration}>
                                        {thursday19 &&
                                            <FifthColumnCell
                                                doc={"Ahmed hosney"}
                                                subject={"Network"}
                                                place={"3A"}
                                                height={thursday19.duration === 1 ? 'one-duration' : thursday19.duration === 2 ? 'two-duration' : thursday19.duration === 3 ? 'three-duration' : thursday19.duration === 4 ? 'four-duration' : "one-duration"}
                                            />
                                        }
                                    </td>}
                            </tr>
                        </tbody>
                    </table >
                </div >
            </div>
        </div>
    )
}

export default Schedule