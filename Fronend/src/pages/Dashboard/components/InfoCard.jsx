import React from 'react'
import dot_bg from "../../../../public/dot_bg.svg"
import grid_bg from  "../../../../public/grid_bg.svg"


const InfoCard = () => {
    const cards=[
        {
            id:1,
            title:"Loans",
            text:"Learn more about Loans - Keep your Bitcoin, access it's value without selling it",
            img:dot_bg

        },
        {
            id:2,
            title:"Contact",
            text:"Learn more about Loans - Keep your Bitcoin, access it's value without selling it",
            img:grid_bg

        }
    ]
  return (
    <div className='flex-col flex md:flex-row gap-4 p-4 w-full '>
        {cards.map((card)=>(
             <div
             key={card.id}
             className={`p-4 rounded-md bg-cover bg-center w-full  text-white shadow-md md:w-1/2 ${card.id % 2===0?'bg-purple-600 text-white':'bg-white text-black'}`}
             style={{
               backgroundImage: `url(${card.img})`, // Set the background image
             }}
           >
                <button className={`p-2 rounded-md ${card.id % 2 === 0 ?'bg-white text-black':'bg-purple-600 text-white'}`}>{card.title}</button>
                <p className='text-black'>{card.text}</p>
            </div>
        ))}
    </div>
  )
}

export default InfoCard