 'use client'
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className='min-h-screen bg-background'>
{/* Header Section */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 p-5 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span>DevPortfolio</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>

{/* Main Section */}
<main className="container px-5">
        {/* Hero Section */}
        <section className="">
          <div className="max-w-3xl space-y-6">
              Available for hire
            {/* <Badge variant="outline" className="px-3 py-1 text-sm">
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Shaheer</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
              I build exceptional and accessible digital experiences for the web.
            </p>
            {/* <div className="flex gap-4">
              <Button size="lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download CV
              </Button>
            </div> */}
            {/* <div className="flex gap-4 pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div> */}
          </div>
        </section>

     
      </main>
      </div>
    </>
  );
}
