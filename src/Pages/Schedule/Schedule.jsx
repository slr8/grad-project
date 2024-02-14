import FifthColumnCell from '../../Components/UserCells/FifthColumnCell/FifthColumnCell'
import FirstColumnCell from '../../Components/UserCells/FirstColumnCell/FirstColumnCell'
import FourthColumnCell from '../../Components/UserCells/FourthColumnCell/FourthColumnCell'
import SecondColumnCell from '../../Components/UserCells/SecondColumnCell/SecondColumnCell'
import ThirdColumnCell from '../../Components/UserCells/ThirdColumnCell/ThirdColumnCell'
import './schedule.css'

const Schedule = () => {
    let duaration = 1
    return (
        <div className='bg-[#0060E42B]'>
            <div className='flex justify-between px-20 items-center'>
                <img src="/Images/Schedule/Assiut_University_logo 1.png" className='w-[100px]' />
                <span className='text-[#0060E4] text-[50px] font-semibold'>د/ أحمد حسني</span>
                <img src="/Images/Schedule/fci.png" className='w-[140px] h-36' />
            </div>
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
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
                                <td rowSpan={duaration}>
                                    <FirstColumnCell
                                        doc={"Ahmed hosney"}
                                        subject={"Network"}
                                        place={"3A"}
                                        height={duaration === 1 ? 'one-duaration' : duaration === 2 ? 'two-duaration' : duaration === 3 ? 'three-duaration' : duaration === 4 ? 'four-duaration' : null}
                                    />
                                </td>
                                <td rowSpan={duaration}>
                                    <SecondColumnCell
                                        doc={"Ahmed hosney"}
                                        subject={"Network"}
                                        place={"3A"}
                                        height={duaration === 1 ? 'one-duaration' : duaration === 2 ? 'two-duaration' : duaration === 3 ? 'three-duaration' : duaration === 4 ? 'four-duaration' : null}
                                    />
                                </td>                                <td rowSpan={duaration}>
                                    <ThirdColumnCell
                                        doc={"Ahmed hosney"}
                                        subject={"Network"}
                                        place={"3A"}
                                        height={duaration === 1 ? 'one-duaration' : duaration === 2 ? 'two-duaration' : duaration === 3 ? 'three-duaration' : duaration === 4 ? 'four-duaration' : null}
                                    />
                                </td>                                <td rowSpan={duaration}>
                                    <FourthColumnCell
                                        doc={"Ahmed hosney"}
                                        subject={"Network"}
                                        place={"3A"}
                                        height={duaration === 1 ? 'one-duaration' : duaration === 2 ? 'two-duaration' : duaration === 3 ? 'three-duaration' : duaration === 4 ? 'four-duaration' : null}
                                    />
                                </td>                                <td rowSpan={duaration}>
                                    <FifthColumnCell
                                        doc={"Ahmed hosney"}
                                        subject={"Network"}
                                        place={"3A"}
                                        height={duaration === 1 ? 'one-duaration' : duaration === 2 ? 'two-duaration' : duaration === 3 ? 'three-duaration' : duaration === 4 ? 'four-duaration' : null}
                                    />
                                </td>                            </tr>
                            <tr>
                                <td className='time'>09:00 - 10:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>10:00 - 11:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>11:00 - 12:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>12:00 - 13:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>13:00 - 14:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>14:00 - 15:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>15:00 - 16:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>16:00 - 17:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>17:00 - 18:00</td>
                                <td>sadasad</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>18:00 - 19:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td className='time'>19:00 - 20:00</td>
                                <td></td>
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