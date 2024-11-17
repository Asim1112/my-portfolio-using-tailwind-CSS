import Image from 'next/image';
import React from 'react'
import { DiVim } from 'react-icons/di';

interface PropsType {
    title: string,
    desc: string,
    img: string,
    tags: string[]

}

function Card({title, desc, img, tags}: PropsType) {
  return (
    <div className='border border-[#A0A4B8] w-[300px] sm:w-[350px]' data-aos="zoom-in-left">
        
      <div>
        <Image className='w-[300px] sm:w-[350px] h-auto'
        src={img} 
        width={350} 
        height={350} 
        alt={title}
        />
      </div>
        
        <div className='p-4 space-y-4'>

            <div className='text-4xl font-extralight'>{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) =>(<div className='tags' key={el}>{el}</div>))}
            </div>
        </div>


    </div>
  )
}


export default Card;
