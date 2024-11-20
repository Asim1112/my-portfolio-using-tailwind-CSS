import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
    {
        id: 0,
        title: "Static Resume",
        desc: "Developed a professional, static resume using HTML, CSS, and TypeScript. This project showcases my front-end skills, with a clean, responsive design that highlights key information in a visually engaging format. The use of TypeScript ensures code reliability and maintainability, while CSS styling emphasizes readability and user experience. A solid foundation for further enhancements into a dynamic and interactive resume.",
        img: "/static resume.jpg",
        tags: ["HTML", "Node", "CSS", "TypeScript"]
    },
    
    {
        id: 1,
        title: "Editable Resume",
        desc: "Created an editable resume using HTML, CSS, and TypeScript, allowing users to easily update and customize content. Focused on a responsive, user-friendly design with efficient TypeScript for enhanced functionality and code reliability. The primary goal of this project was to offer a seamless, intuitive experience. Each section is clearly defined, making the editing process feel like a natural extension of how users would normally present their resumes. As a result, the editing functionality runs smoothly, with minimal risk of crashes or unexpected behavior.",
        img: "/editable_resume.jpg",
        tags: ["HTML", "Node", "CSS", "TypeScript"]
    },

    {
        id: 2,
        title: "Pixel-Perfect Website Clone",
        desc: "Recreated a pixel-perfect webpage clone using Next.js, achieving an exact match to the original design with a focus on responsive layout and smooth user experience. The focus was on achieving an exact match to the original layout, color scheme, typography, and interactivity. This project involved intensive attention to detail to ensure that every aspect of the design matched the original.",
        img: "/website1.jpg",
        tags: ["Next.js", "Node", "Tailwind CSS", "TypeScript"]
    },

    {
        id: 3,
        title: "Flawless Design Replication with Next.js",
        desc: "Developed a pixel-perfect clone of an existing website using Next.js, focusing on accuracy and design consistency. Leveraged Next.js for efficient server-side rendering and responsive layout, delivering a seamless user experience that mirrors the original site. This project highlights my skills in front-end development, attention to detail, and expertise in replicating complex designs.",
        img: "/website2.jpg",
        tags: ["Next.js", "Node", "Tailwind CSS", "TypeScript"]
    }
]

function Projects() {
  return (
    <div id="projects" className='container mx-auto pt-32 max-w-5xl' >
      <Heading title = "Projects"/>
      <div className='grid gap-60 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-stretch'>
        {data.map((el) => (<Card
         key={el.id}
         title={el.title}
         desc={el.desc}
         img={el.img}
         tags={el.tags}
         />))}
      </div>
    </div>
  )
}


export default Projects;