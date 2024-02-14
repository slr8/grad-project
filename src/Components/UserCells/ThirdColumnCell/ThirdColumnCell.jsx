import React from 'react'

const ThirdColumnCell = ({ doc, place, subject, height }) => {
    return (
        <div className={`border-solid border-l-8 border-[#0060E4] bg-[#D19797] flex items-center justify-center flex-col text-white text-xl rounded-r-[15px] font-bold ${height}`}>
            <p>{doc}</p>
            <p>{subject}</p>
            <p>{place}</p>
        </div>
    )
}

export default ThirdColumnCell