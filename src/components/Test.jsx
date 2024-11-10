import React from 'react'
import fac1 from '../Assets/rivotfactory2.jpg'
import fac2 from '../Assets/rivotfactory3.jpg'
import fac3 from '../Assets/rivotfactory4.jpg'

const Test = () => {
  return (
    <>
    <br />
    <br />
    <br />
     <h1 className='pl-12'>OUR FACTORY SETUP</h1>
      <div className='flex justify-center h-96 '> 
      <img width='1430' height='200' src={fac1} alt="Factorty Image" />
      </div>
      <div className='flex gap-3 pl-10 pr-10 mt-5 max-md:flex-wrap'>
        <div><img src={fac2} alt="Factorty Image" />
        <h4>Futerstic Factory </h4>
        <p>India's big leap in building the future of energy.</p>
        </div>
        <div><img src={fac3} alt="Factorty Image" />
        <h4>Futerstic Factory </h4>
        <p>India's big leap in building the future of energy.</p>
        </div>
      </div>
    </>
  )
}

export default Test