import React from 'react'
import ProjectCard from './project-card'

const Projects = () => {
  return (
    <>
     {/* Projects Section */}
        <section id="projects" className="p-8 py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="To-do App with CRUD Operations"
              description="A full-featured to-do application that allows users to create, read, update, and delete tasks with a user-friendly interface."
              image=""
              tags={["React.js", "JavaScript"]}
              demoUrl="https://todo-with-react-js-five.vercel.app/"
              repoUrl="https://github.com/Sherrrrryyy/Todo-with-React-js"
            />
            <ProjectCard
              title="Electrical Store UI Design"
              description="A modern and responsive UI design for an online electrical store, showcasing products and enhancing user experience."
              image=""
              tags={[ "Next.js", "Typescript"]}
              demoUrl="https://electro-tech-cyan.vercel.app/"
              repoUrl="https://github.com/Sherrrrryyy/Electro-Tech"
            />
            <ProjectCard
              title="Tiramisu Website with Cart Functionality"
              description="A delightful dessert-themed website featuring a variety of tiramisu flavors, complete with shopping cart functionality for easy ordering."
              image=""
              tags={["React.js", "Javascript", "Tailwind CSS"]}
              demoUrl="https://trimasu.vercel.app"
              repoUrl="https://github.com/Sherrrrryyy/TRIMASU"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A weather application with interactive maps, forecasts, and location-based alerts."
              image="/placeholder.svg?height=300&width=600"
              tags={["React", "OpenWeather API", "Mapbox", "ChartJS"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </section>

    </>
  )
}

export default Projects
