import React from 'react'

const SecondColumnCell = ({ doc, place, subject, height }) => {
    return (
        <div className={`border-solid border-l-8 border-[#0060E4] bg-[#47976EBF] flex items-center justify-center flex-col text-white text-xl rounded-r-[15px] font-bold ${height}`}>
            <p>{doc}</p>
            <p>{subject}</p>
            <p>{place}</p>
        </div>
    )
}

export default SecondColumnCell