import React from 'react'

const FourthColumnCell = ({ doc, place, subject, height }) => {
    return (
        <div className={`border-solid border-l-8 border-[#E51ED1] bg-[#47976EBF] flex items-center justify-center flex-col text-white text-xl rounded-r-[15px] font-bold ${height}`}>
            <p>{doc}</p>
            <p>{subject}</p>
            <p>{place}</p>
        </div>
    )
}

export default FourthColumnCell