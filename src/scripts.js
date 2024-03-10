import FifthColumnCell from "./Components/UserCells/FifthColumnCell/FifthColumnCell";
import FirstColumnCell from "./Components/UserCells/FirstColumnCell/FirstColumnCell";
import FourthColumnCell from "./Components/UserCells/FourthColumnCell/FourthColumnCell";
import SecondColumnCell from "./Components/UserCells/SecondColumnCell/SecondColumnCell";
import ThirdColumnCell from "./Components/UserCells/ThirdColumnCell/ThirdColumnCell";
const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
const columnComponents = [FirstColumnCell, SecondColumnCell, ThirdColumnCell, FourthColumnCell, FifthColumnCell];

export const generateRow1 = (apps) => {
    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData = apps[`${day}${8}`]; // Adjust this depending on your data structure

        cells.push(
            <td key={index} rowSpan={dayData?.duration}>
                {dayData && (
                    <CellComponent
                        doc={dayData.doctorName}
                        subject={"Network"}
                        place={"3A"}
                    />
                )}
            </td>
        );
    }

    return cells;
};

export const generateRow2 = (apps) => {
    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData1 = apps[`${day}${8}`]; // Adjust this depending on your data structure
        const dayData2 = apps[`${day}${9}`];

        cells.push(
            dayData1?.duration >= 2 ? null :
                <td key={index} rowSpan={dayData2?.duration}>
                    {dayData2 && (
                        <CellComponent
                            doc={dayData2.doctorName}
                            subject={"Network"}
                            place={"3A"}
                        />
                    )}
                </td>
        );
    }

    return cells;
};
export const generateRow3 = (apps) => {
    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData1 = apps[`${day}${8}`]; // Adjust this depending on your data structure
        const dayData2 = apps[`${day}${9}`];
        const dayData3 = apps[`${day}${10}`];

        cells.push(
            dayData1?.duration >= 3 || dayData2?.duration >= 2 ? null :
                <td key={index} rowSpan={dayData3?.duration}>
                    {dayData3 && (
                        <CellComponent
                            doc={dayData3.doctorName}
                            subject={"Network"}
                            place={"3A"}
                        />
                    )}
                </td>
        );
    }

    return cells;
};
export const generateRow4 = (apps, one, two, three, four) => {

    const cells = [];
    for (let index = 0; index < daysOfWeek.length; index++) {
        const day = daysOfWeek[index];
        const CellComponent = columnComponents[index];

        const dayData1 = apps[`${day}${one}`]; // Adjust this depending on your data structure
        const dayData2 = apps[`${day}${two}`];
        const dayData3 = apps[`${day}${three}`];
        const dayData4 = apps[`${day}${four}`];


        cells.push(
            dayData1?.duration >= 4 || dayData2?.duration >= 3 || dayData3?.duration >= 2 ? null :
                <td key={index} rowSpan={dayData4?.duration}>
                    {dayData4 && (
                        <CellComponent
                            doc={dayData4.doctorName}
                            subject={"Network"}
                            place={"3A"}
                        />
                    )}
                </td>
        );
    }

    return cells;
};