import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>

            <div data-aos="zoom-in-left">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-[#E5E5E5] pt-6'>
                I have a strong foundation in web development, with expertise in HTML, CSS, and TypeScript. My experience includes building dynamic, user-friendly applications using frameworks like React and Next.js. I am skilled in Tailwind CSS, allowing me to create responsive and visually appealing designs efficiently. Driven by a passion for learning, I stay updated on the latest technologies to continuously expand my skills and deliver high-quality contributions to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-[#F0F0F0] text-3xl sm:text-4xl'>
                    <div className='space-y-6'>
                            <h2 data-aos="zoom-in-left">TypeScript</h2>
                            <h2 data-aos="zoom-in-left">React.js</h2>
                            <h2 data-aos="zoom-in-left">Next.js</h2>
                    </div>
                    <div className='space-y-6'>
                            <h2 data-aos="zoom-in-left">Tailwind CSS</h2>
                            <h2 data-aos="zoom-in-left">CSS</h2>
                            <h2 data-aos="zoom-in-left">Node.js</h2>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skills

