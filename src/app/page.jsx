'use client'
import About from '@/components/About';
import Header from '@/components/Header.jsx';
import Main from '@/components/Main';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />

      <div className='min-h-screen bg-background'>
      
      </div>


    </>
  );
}
