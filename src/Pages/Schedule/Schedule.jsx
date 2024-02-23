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
            "day": "Sunday",
            "startTime": "9:00",
            "duration": 2
        },
        {
            "subjectName": "History",
            "doctorName": "Dr. Johnson",
            "day": "monday",
            "startTime": "18:00",
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

const sunday8 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "8:00");
const sunday9 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "9:00");
const sunday10 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "10:00");
const sunday11 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "11:00");
const sunday12 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "12:00");
const sunday13 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "13:00");
const sunday14 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "14:00");
const sunday15 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "15:00");
const sunday16 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "16:00");
const sunday17 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "17:00");
const sunday18 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "18:00");
const sunday19 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "19:00");

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

const mondayAppointments = generateAppointments("Monday", 8, 19);

console.log(mondayAppointments.monday18);
const { monday8, monday9, monday10, monday11, monday12, monday13, monday14, monday15, monday16, monday17, monday18, monday19 } = generateAppointments("Monday", 8, 19);

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
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table >
                </div >
            </div>
        </div>
    )
}

export default Schedule