import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>

            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                I have a strong foundation in web development, with expertise in HTML, CSS, and TypeScript. My experience includes building dynamic, user-friendly applications using frameworks like React and Next.js. I am skilled in Tailwind CSS, allowing me to create responsive and visually appealing designs efficiently. Driven by a passion for learning, I stay updated on the latest technologies to continuously expand my skills and deliver high-quality contributions to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3x1 sm:text-4x1'>
                    <div className='space-y-2'>
                            <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">TypeScript</h2>
                            <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">React.js</h2>
                            <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                            <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Tailwind CSS</h2>
                            <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">CSS</h2>
                            <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Node.js</h2>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skills

