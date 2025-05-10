'use client'
import Header from '@/components/Header.jsx';
import Main from '@/components/Main';
import React from 'react';

export default function Home() {
  return (
    <>
    <Header/>
    <Main />

    <div className='min-h-screen bg-background'>

        {/* About Section */}
        <section id="about" className="py-18 p-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1/3">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience building web applications. I
                  specialize in React, Next.js, Node.js, and modern web technologies.
                </p>
                <p>
                  My journey in web development started when I built my first website at 15. Since then, I've worked
                  with startups and established companies to create intuitive and performant digital experiences.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new
                  technologies.
                </p>
              </div>
            </div>

            <div className="flex-1/3">
              <div className="p-6 border rounded-lg shadow-md bg-black">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <span className="px-2 py-1 text-sm border rounded-md">2021 - Present</span>
                </div>
                <p className="text-primary">TechCorp Inc.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Led the frontend team in developing a SaaS platform with React and Next.js.
                </p>
                </div>
                <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Full Stack Developer</h4>
                  <span className="px-2 py-1 text-sm border rounded-md">2018 - 2021</span>
                </div>
                <p className="text-primary">WebSolutions Ltd.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Built and maintained multiple client websites and web applications.
                </p>
                </div>
              </div>
              </div>
            </div>

            <div className="flex-1">
              {/* <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Senior Frontend Developer</h4>
                        <Badge variant="outline">2021 - Present</Badge>
                      </div>
                      <p className="text-primary">TechCorp Inc.</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Led the frontend team in developing a SaaS platform with React and Next.js.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Full Stack Developer</h4>
                        <Badge variant="outline">2018 - 2021</Badge>
                      </div>
                      <p className="text-primary">WebSolutions Ltd.</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Built and maintained multiple client websites and web applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </section>
    </div>
    
      
    </>
  );
}
