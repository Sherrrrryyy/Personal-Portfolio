'use client'
import About from '@/components/About';
import Header from '@/components/Header.jsx';
import Main from '@/components/Main';
import Skills from '@/components/Skills';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />

      <div className='min-h-screen bg-background'>
      
      </div>


    </>
  );
}
