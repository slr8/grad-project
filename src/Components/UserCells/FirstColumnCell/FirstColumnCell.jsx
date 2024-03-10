import React from 'react'

const FirstColumnCell = ({ doc, place, subject }) => {
    return (
        <div className={`border-solid border-l-8 border-[#0060E4] bg-[#006BFF8A] flex items-center justify-center flex-col text-white text-xl rounded-r-[15px] font-bold h-[100%]`}>
            <p>{doc}</p>
            <p>{subject}</p>
            <p>{place}</p>
        </div>
    )
}

export default FirstColumnCell