import React from 'react'
import Header from '../../Components/Header/Header'
import TaProfBox from '../../Components/TaProfBox/TaProfBox'
import ScrollToTop from '../../UI/ScrollToTop'

const ProfDetails = () => {

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get('https://localhost:44382/api/TeachingStaff/ViewTeachingStaff');
    //         setData(response.data);
    //     };

    //     fetchData();
    // }, []);

    const data = [
        {
            "ssn": "1234567892",
            "fullName": "John Smith",
            "discription": "Professor of Physics",
            "facebookLink": "https://www.facebook.com/john",
            "githubLink": "https://github.com/johnsmith",
            "linkedInLink": "https://www.linkedin.com/in/john",
            "acadimicMailLink": "john.smith@example.com",
            "picture": "",
            "deptName": "IS"
        },
        {
            "ssn": "2587413692",
            "fullName": "Sophia Wilson",
            "discription": "Professor of History",
            "facebookLink": "https://www.facebook.com/soph",
            "githubLink": "https://github.com/sophiawils",
            "linkedInLink": "https://www.linkedin.com/in/sop",
            "acadimicMailLink": "sophia.wilson@example.com",
            "picture": "",
            "deptName": "IS"
        },
        {
            "ssn": "3216549872",
            "fullName": "Daniel Anderson",
            "discription": "TA",
            "facebookLink": "https://www.facebook.com/dani",
            "githubLink": "https://github.com/danielande",
            "linkedInLink": "https://www.linkedin.com/in/dan",
            "acadimicMailLink": "daniel.anderson@example.com",
            "picture": "",
            "deptName": "BI"
        },
        {
            "ssn": "4567891232",
            "fullName": "Michael Brown",
            "discription": "Teaching Assistant",
            "facebookLink": "https://www.facebook.com/mike",
            "githubLink": "https://github.com/mikebrown",
            "linkedInLink": "https://www.linkedin.com/in/mik",
            "acadimicMailLink": "michael.brown@example.com",
            "picture": "pic.png",
            "deptName": "MM"
        },
        {
            "ssn": "6543219872",
            "fullName": "David Wilson",
            "discription": "TA",
            "facebookLink": "https://www.facebook.com/dave",
            "githubLink": "https://github.com/davewilson",
            "linkedInLink": "https://www.linkedin.com/in/dav",
            "acadimicMailLink": "david.wilson@example.com",
            "picture": "pic.png",
            "deptName": "CS"
        },
        {
            "ssn": "7412589632",
            "fullName": "Benjamin Thompson",
            "discription": "TA Administrator",
            "facebookLink": "https://www.facebook.com/benj",
            "githubLink": "https://github.com/benjaminth",
            "linkedInLink": "https://www.linkedin.com/in/ben",
            "acadimicMailLink": "benjamin.thompson@example.com",
            "picture": "pic.png",
            "deptName": "CS"
        },
        {
            "ssn": "7891234562",
            "fullName": "Jessica Davis",
            "discription": "Professor of Chemistry",
            "facebookLink": "https://www.facebook.com/jess",
            "githubLink": "https://github.com/jessdavis",
            "linkedInLink": "https://www.linkedin.com/in/jes",
            "acadimicMailLink": "jessica.davis@example.com",
            "picture": "pic.png",
            "deptName": "IT"
        },
        {
            "ssn": "9638527412",
            "fullName": "Ethan Adams",
            "discription": "TA",
            "facebookLink": "https://www.facebook.com/etha",
            "githubLink": "https://github.com/ethanadams",
            "linkedInLink": "https://www.linkedin.com/in/eth",
            "acadimicMailLink": "ethan.adams@example.com",
            "picture": "pic.png",
            "deptName": "MM"
        },
        {
            "ssn": "9871236542",
            "fullName": "Emily Thompson",
            "discription": "Professor of Biology",
            "facebookLink": "https://www.facebook.com/emil",
            "githubLink": "https://github.com/emilythom",
            "linkedInLink": "https://www.linkedin.com/in/emi",
            "acadimicMailLink": "emily.thompson@example.com",
            "picture": "pic.png",
            "deptName": "AI"
        },
        {
            "ssn": "9876543212",
            "fullName": "Sarah Johnson",
            "discription": "TA Administrator",
            "facebookLink": "https://www.facebook.com/sara",
            "githubLink": "https://github.com/sarahjohn",
            "linkedInLink": "https://www.linkedin.com/in/sar",
            "acadimicMailLink": "sarah.johnson@example.com",
            "picture": "pic.png",
            "deptName": "CS"
        }
    ]
    return (
        <div className='bg-[#C5D1F2] h-full'>
            <ScrollToTop />
            <Header title={"TA's"} />
            <div className=' grid grid-cols-3 gap-y-14 place-items-center mt-8 pb-8'>
                {data.map(e => {
                    return (
                        <>
                            <TaProfBox
                                key={e.ssn}
                                name={e.fullName}
                                dep={`${e.deptName} Department`}
                                img={e.picture}
                                info={e.discription}
                                fb={e.facebookLink}
                                li={e.linkedInLink}
                                gm={e.acadimicMailLink}
                                gh={e.githubLink}
                            />
                        </>
                    )
                })}
            </div>
        </div>)
}
export default ProfDetails