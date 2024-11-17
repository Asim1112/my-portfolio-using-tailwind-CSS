import React from 'react'

interface propsType {
    title: string;
}

function Heading ({title}: propsType) {
  return (
    <div className='text-center text-4xl pb-20' data-aos="zoom-in-left">
        <p className='border-b-4 inline-block pb-2' >{title}</p>
    </div>
  )
}

export default Heading;