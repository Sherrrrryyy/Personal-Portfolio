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
              title="E-commerce Platform"
              description="A full-featured online store with payment processing, inventory management, and admin dashboard."
              image="/placeholder.svg?height=300&width=600"
              tags={["Next.js", "JavaScript", "Stripe", "MongoDB"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management tool with real-time updates, file sharing, and team communication features."
              image="/placeholder.svg?height=300&width=600"
              tags={["React", "Node.js", "Socket.io", "PostgreSQL"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A customizable portfolio template for developers and designers to showcase their work."
              image="/placeholder.svg?height=300&width=600"
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
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
