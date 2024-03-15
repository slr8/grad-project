import FirstColumnCell from "../UserCells/FirstColumnCell/FirstColumnCell";

const labData = {
    "schedule": [
        {
            "teachingStaffName": "Daniel Anderson",
            "courseName": "Introduction to Programming",
            "day": "sunday",
            "startTime": 8,
            "duration": 4,
            "year": 4,
            "location": "0ج",
            "section": 7,
            "groupNumber": null,
            "departmentName": null
        },
        {
            "teachingStaffName": "John Smith",
            "courseName": "Course 31",
            "day": "Monday",
            "startTime": 8,
            "duration": 4,
            "year": 4,
            "location": "0أ",
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
    ...generateAppointments("monday", "0أ", "1", 8, 19),
    ...generateAppointments("monday", "0ب", "2", 8, 19),
    ...generateAppointments("monday", "0ج", "3", 8, 19),
    ...generateAppointments("monday", "0د", "4", 8, 19),
    ...generateAppointments("monday", "0ه", "5", 8, 19),
    ...generateAppointments("monday", "1أ", "6", 8, 19),
    ...generateAppointments("monday", "1ب", "7", 8, 19),
    ...generateAppointments("monday", "1ج", "8", 8, 19),
    ...generateAppointments("monday", "1د", "9", 8, 19),
    ...generateAppointments("monday", "1ه", "10", 8, 19),
    ...generateAppointments("monday", "2أ", "11", 8, 19),
    ...generateAppointments("monday", "2ب", "12", 8, 19),
    ...generateAppointments("monday", "2ج", "13", 8, 19),
    ...generateAppointments("monday", "2د", "14", 8, 19),
    ...generateAppointments("monday", "2ه", "15", 8, 19),
    ...generateAppointments("monday", "3أ", "16", 8, 19),
    ...generateAppointments("monday", "3ب", "17", 8, 19),
    ...generateAppointments("monday", "3ج", "18", 8, 19),
    ...generateAppointments("monday", "3د", "19", 8, 19),
    ...generateAppointments("monday", "3ه", "20", 8, 19),
    ...generateAppointments("monday", "4أ", "21", 8, 19),
    ...generateAppointments("monday", "4ب", "22", 8, 19),
    ...generateAppointments("monday", "4ج", "23", 8, 19),
    ...generateAppointments("monday", "4د", "24", 8, 19),
    ...generateAppointments("monday", "4ه", "25", 8, 19),
    ...generateAppointments("tuesday", "0أ", "1", 8, 19),
    ...generateAppointments("tuesday", "0ب", "2", 8, 19),
    ...generateAppointments("tuesday", "0ج", "3", 8, 19),
    ...generateAppointments("tuesday", "0د", "4", 8, 19),
    ...generateAppointments("tuesday", "0ه", "5", 8, 19),
    ...generateAppointments("tuesday", "1أ", "6", 8, 19),
    ...generateAppointments("tuesday", "1ب", "7", 8, 19),
    ...generateAppointments("tuesday", "1ج", "8", 8, 19),
    ...generateAppointments("tuesday", "1د", "9", 8, 19),
    ...generateAppointments("tuesday", "1ه", "10", 8, 19),
    ...generateAppointments("tuesday", "2أ", "11", 8, 19),
    ...generateAppointments("tuesday", "2ب", "12", 8, 19),
    ...generateAppointments("tuesday", "2ج", "13", 8, 19),
    ...generateAppointments("tuesday", "2د", "14", 8, 19),
    ...generateAppointments("tuesday", "2ه", "15", 8, 19),
    ...generateAppointments("tuesday", "3أ", "16", 8, 19),
    ...generateAppointments("tuesday", "3ب", "17", 8, 19),
    ...generateAppointments("tuesday", "3ج", "18", 8, 19),
    ...generateAppointments("tuesday", "3د", "19", 8, 19),
    ...generateAppointments("tuesday", "3ه", "20", 8, 19),
    ...generateAppointments("tuesday", "4أ", "21", 8, 19),
    ...generateAppointments("tuesday", "4ب", "22", 8, 19),
    ...generateAppointments("tuesday", "4ج", "23", 8, 19),
    ...generateAppointments("tuesday", "4د", "24", 8, 19),
    ...generateAppointments("tuesday", "4ه", "25", 8, 19),
    ...generateAppointments("wednesday", "0أ", "1", 8, 19),
    ...generateAppointments("wednesday", "0ب", "2", 8, 19),
    ...generateAppointments("wednesday", "0ج", "3", 8, 19),
    ...generateAppointments("wednesday", "0د", "4", 8, 19),
    ...generateAppointments("wednesday", "0ه", "5", 8, 19),
    ...generateAppointments("wednesday", "1أ", "6", 8, 19),
    ...generateAppointments("wednesday", "1ب", "7", 8, 19),
    ...generateAppointments("wednesday", "1ج", "8", 8, 19),
    ...generateAppointments("wednesday", "1د", "9", 8, 19),
    ...generateAppointments("wednesday", "1ه", "10", 8, 19),
    ...generateAppointments("wednesday", "2أ", "11", 8, 19),
    ...generateAppointments("wednesday", "2ب", "12", 8, 19),
    ...generateAppointments("wednesday", "2ج", "13", 8, 19),
    ...generateAppointments("wednesday", "2د", "14", 8, 19),
    ...generateAppointments("wednesday", "2ه", "15", 8, 19),
    ...generateAppointments("wednesday", "3أ", "16", 8, 19),
    ...generateAppointments("wednesday", "3ب", "17", 8, 19),
    ...generateAppointments("wednesday", "3ج", "18", 8, 19),
    ...generateAppointments("wednesday", "3د", "19", 8, 19),
    ...generateAppointments("wednesday", "3ه", "20", 8, 19),
    ...generateAppointments("wednesday", "4أ", "21", 8, 19),
    ...generateAppointments("wednesday", "4ب", "22", 8, 19),
    ...generateAppointments("wednesday", "4ج", "23", 8, 19),
    ...generateAppointments("wednesday", "4د", "24", 8, 19),
    ...generateAppointments("wednesday", "4ه", "25", 8, 19),
    ...generateAppointments("thursday", "0أ", "1", 8, 19),
    ...generateAppointments("thursday", "0ب", "2", 8, 19),
    ...generateAppointments("thursday", "0ج", "3", 8, 19),
    ...generateAppointments("thursday", "0د", "4", 8, 19),
    ...generateAppointments("thursday", "0ه", "5", 8, 19),
    ...generateAppointments("thursday", "1أ", "6", 8, 19),
    ...generateAppointments("thursday", "1ب", "7", 8, 19),
    ...generateAppointments("thursday", "1ج", "8", 8, 19),
    ...generateAppointments("thursday", "1د", "9", 8, 19),
    ...generateAppointments("thursday", "1ه", "10", 8, 19),
    ...generateAppointments("thursday", "2أ", "11", 8, 19),
    ...generateAppointments("thursday", "2ب", "12", 8, 19),
    ...generateAppointments("thursday", "2ج", "13", 8, 19),
    ...generateAppointments("thursday", "2د", "14", 8, 19),
    ...generateAppointments("thursday", "2ه", "15", 8, 19),
    ...generateAppointments("thursday", "3أ", "16", 8, 19),
    ...generateAppointments("thursday", "3ب", "17", 8, 19),
    ...generateAppointments("thursday", "3ج", "18", 8, 19),
    ...generateAppointments("thursday", "3د", "19", 8, 19),
    ...generateAppointments("thursday", "3ه", "20", 8, 19),
    ...generateAppointments("thursday", "4أ", "21", 8, 19),
    ...generateAppointments("thursday", "4ب", "22", 8, 19),
    ...generateAppointments("thursday", "4ج", "23", 8, 19),
    ...generateAppointments("thursday", "4د", "24", 8, 19),
    ...generateAppointments("thursday", "4ه", "25", 8, 19),
};
console.log(appsss);

export function generateScheduleCells(day, appsss, labs) {
    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = appsss[`${day.toLowerCase()}8${suffixes[i]}`];

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
export const generateScheduleCells2 = (day, appsss, labs) => {
    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = appsss[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = appsss[`${day.toLowerCase()}9${suffixes[i]}`];

        cells.push(
            currentSchedule?.duration >= 2 ? null :
                <td rowSpan={currentSchedule2?.duration}>
                    {currentSchedule2 && (
                        <FirstColumnCell
                            doc={currentSchedule2?.teachingStaffName}
                            subject={currentSchedule2?.courseName}
                            place={currentSchedule2?.location}
                            year={currentSchedule2?.year}
                            section={currentSchedule2?.section}
                            group={currentSchedule2?.groupNumber}
                            dep={currentSchedule2?.departmentName}
                        />
                    )}
                </td>
        );
    }

    return cells;
};
export const generateScheduleCells3 = (day, appsss, labs) => {
    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = appsss[`${day.toLowerCase()}8${suffixes[i]}`];
        const currentSchedule2 = appsss[`${day.toLowerCase()}9${suffixes[i]}`];
        const currentSchedule3 = appsss[`${day.toLowerCase()}10${suffixes[i]}`];

        cells.push(
            currentSchedule?.duration >= 3 || currentSchedule2?.duration >= 2 ? null :
                <td rowSpan={currentSchedule3?.duration}>
                    {currentSchedule3 && (
                        <FirstColumnCell
                            doc={currentSchedule3?.teachingStaffName}
                            subject={currentSchedule3?.courseName}
                            place={currentSchedule3?.location}
                            year={currentSchedule3?.year}
                            section={currentSchedule3?.section}
                            group={currentSchedule3?.groupNumber}
                            dep={currentSchedule3?.departmentName}
                        />
                    )}
                </td>
        );
    }

    return cells;
};

export const generateScheduleCells4 = (day, appsss, labs, one, two, three, four) => {
    const suffixes = labs;
    const cells = [];

    for (let i = 0; i < suffixes.length; i++) {
        const currentSchedule = appsss[`${day.toLowerCase()}${one}${suffixes[i]}`];
        const currentSchedule2 = appsss[`${day.toLowerCase()}${two}${suffixes[i]}`];
        const currentSchedule3 = appsss[`${day.toLowerCase()}${three}${suffixes[i]}`];
        const currentSchedule4 = appsss[`${day.toLowerCase()}${four}${suffixes[i]}`];

        cells.push(
            currentSchedule?.duration >= 4 || currentSchedule2?.duration >= 3 || currentSchedule3?.duration >= 2 ? null :
                <td rowSpan={currentSchedule4?.duration}>
                    {currentSchedule4 && (
                        <FirstColumnCell
                            doc={currentSchedule4?.teachingStaffName}
                            subject={currentSchedule4?.courseName}
                            place={currentSchedule4?.location}
                            year={currentSchedule4?.year}
                            section={currentSchedule4?.section}
                            group={currentSchedule4?.groupNumber}
                            dep={currentSchedule4?.departmentName}
                        />
                    )}
                </td>
        );
    }

    return cells;
};
