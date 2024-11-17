import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";


function Contact() {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-left">Get In touch</h2>
                <p className='text-[#E5E5E5] text-[18px] pt-2' data-aos="zoom-in-left">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-left">

                    <AiOutlineMail size={30} /> asimhussain787@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-left">

                    <FaPhone size={30} /> (+92)-3002722662
                </div>
            </div>

             <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-[40px] bg-transparent border border-[#32a89b]'
                    id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='h-[40px] bg-transparent border border-[#32a89b]'
                    id='email' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-left">
                    <label htmlFor="msg">Message</label>
                    <textarea  className='bg-transparent border border-[#32a89b]'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-[#32a89b] p-2 px-6 rounded-full' data-aos="zoom-in-left">Send</button>
             </div>
        </div>

    </div>
  )
}

export default Contact
