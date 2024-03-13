import FirstColumnCell from "../UserCells/FirstColumnCell/FirstColumnCell";

const labData = {
    "schedule": [
        {
            "teachingStaffName": "Daniel Anderson",
            "courseName": "Introduction to Programming",
            "day": "sunday",
            "startTime": 8,
            "duration": 1,
            "year": 4,
            "location": "4د",
            "section": 7,
            "groupNumber": null,
            "departmentName": null
        },
        {
            "teachingStaffName": "John Smith",
            "courseName": "Course 31",
            "day": "Sunday",
            "startTime": 10,
            "duration": 4,
            "year": 4,
            "location": "0ب",
            "section": null,
            "groupNumber": null,
            "departmentName": "BI"
        }
    ]
}
const generateAppointments = (day, lab, labNum, start, end) => {
    const appointmentsObj = {};
    for (let i = start; i <= end; i++) {
        const appointmentKey = `${day.toLowerCase()}${i + labNum}`;
        appointmentsObj[appointmentKey] = labData.schedule.find(e =>
            e.day.toLowerCase() === day.toLowerCase() && e.startTime === i && e.location === lab
        );
    }
    return appointmentsObj;
};
export const appsss = {
    ...generateAppointments("Sunday", "0أ", "1", 8, 19),
    ...generateAppointments("Sunday", "0ب", "2", 8, 19),
    ...generateAppointments("Sunday", "0ج", "3", 8, 19),
    ...generateAppointments("Sunday", "0د", "4", 8, 19),
    ...generateAppointments("Sunday", "0ه", "5", 8, 19),
    ...generateAppointments("Sunday", "1أ", "6", 8, 19),
    ...generateAppointments("Sunday", "1ب", "7", 8, 19),
    ...generateAppointments("Sunday", "1ج", "8", 8, 19),
    ...generateAppointments("Sunday", "1د", "9", 8, 19),
    ...generateAppointments("Sunday", "1ه", "10", 8, 19),
    ...generateAppointments("Sunday", "2أ", "11", 8, 19),
    ...generateAppointments("Sunday", "2ب", "12", 8, 19),
    ...generateAppointments("Sunday", "2ج", "13", 8, 19),
    ...generateAppointments("Sunday", "2د", "14", 8, 19),
    ...generateAppointments("Sunday", "2ه", "15", 8, 19),
    ...generateAppointments("Sunday", "3أ", "16", 8, 19),
    ...generateAppointments("Sunday", "3ب", "17", 8, 19),
    ...generateAppointments("Sunday", "3ج", "18", 8, 19),
    ...generateAppointments("Sunday", "3د", "19", 8, 19),
    ...generateAppointments("Sunday", "3ه", "20", 8, 19),
    ...generateAppointments("Sunday", "4أ", "21", 8, 19),
    ...generateAppointments("Sunday", "4ب", "22", 8, 19),
    ...generateAppointments("Sunday", "4ج", "23", 8, 19),
    ...generateAppointments("Sunday", "4د", "24", 8, 19),
    ...generateAppointments("Sunday", "4ه", "25", 8, 19),
};
console.log(appsss);

export function generateScheduleCells(day, appsss, labs) {
    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = appsss[`${day}8${suffixes[i]}`];

        cells.push(
            <td rowSpan={currentSchedule?.duration}>
                {currentSchedule && (
                    <FirstColumnCell
                        doc={currentSchedule?.teachingStaffName}
                        subject={currentSchedule?.courseName}
                        place={currentSchedule?.location}
                        year={currentSchedule?.year}
                        section={currentSchedule?.section}
                        group={currentSchedule?.groupNumber}
                        dep={currentSchedule?.departmentName}
                    />
                )}
            </td>
        );
    }

    return cells;
}