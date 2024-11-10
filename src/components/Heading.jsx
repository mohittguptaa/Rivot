import React from 'react'
import "./Heading.css"

const Heading = ({text}) => {
    return (
        <div className=" heading" >
            <div className='max-md:text-amber-500'></div>
            <p className='max-md:text-amber-500'>{text}</p>
            <div></div>
            
        </div>
    )
}

export default Heading
