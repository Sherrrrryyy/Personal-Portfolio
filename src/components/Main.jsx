import React from 'react'
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <div className='min-h-screen bg-background'>
                <main className="container px-8 pt-40">
                    <section>
                        <div className="max-w-3xl space-y-6">
                            <div className='flex items-center justify-start'>
                                <h1 className="border border-white p-2 rounded-full border-r-4 font-bold tracking-tight">Available for hire</h1>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight pt-5">
                                Hi, I'm <span className="text-primary">Shaheer</span>
                                <br />
                                Full Stack Developer
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                                I build exceptional and accessible digital experiences for the web.
                            </p>

                            <div className="flex gap-4 pt-5">
                                <div className='p-2 px-5 rounded-md border border-primary bg-white text-black font-bold flex gap-4'>
                                    <button className="btn-primary">
                                        View Projects
                                    </button>
                                </div>
                                <div className='p-2 px-5 rounded-md border border-white bg-black text-white font-bold flex gap-4'>
                                    <button className="btn-secondary">
                                        Download CV
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container">
                        <div className="flex gap-12 pt-16">
                            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <button className="icon-button">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587v-2.17c-3.338.725-4.033-1.613-4.033-1.613-.547-1.387-1.338-1.753-1.338-1.753-1.093-.75.088-.725.088-.725 1.207.088 1.838 1.238 1.838 1.238 1.073 1.837 2.813 1.305 3.5.988.113-.775.42-1.305.763-1.605-2.665-.3-5.467-1.337-5.467-5.93 0-1.313.468-2.387 1.238-3.225-.113-.3-.538-1.513.113-3.15 0 0 1.007-.325 3.3 1.237.957-.263 1.987-.4 3.007-.4 1.02 0 2.05.137 3.007.4 2.293-1.562 3.3-1.237 3.3-1.237.65 1.637.225 2.85.113 3.15.775.838 1.238 1.912 1.238 3.225 0 4.6-2.813 5.625-5.487 5.925.432.375.813 1.125.813 2.275v3.375c0 .325.188.7.8.587C20.563 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </button>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <button className="icon-button">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 19H5.67V9h2.67v10zM7 7.67C6.07 7.67 5.33 6.93 5.33 6S6.07 4.33 7 4.33 8.67 5.07 8.67 6 7.93 7.67 7 7.67zM19 19h-2.67v-5.33c0-1.27-.47-2.13-1.67-2.13-.93 0-1.47.63-1.73 1.23-.1.23-.13.53-.13.83V19H10v-10h2.67v1.33h.03c.37-.57 1.03-1.37 2.4-1.37 1.73 0 3.03 1.13 3.03 3.57V19z" />
                                    </svg>
                                </button>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <button className="icon-button">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.92 4.92 0 0 0 2.15-2.71 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.56 4.92 4.92 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.02 10.02 0 0 0 24 4.56z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Main
