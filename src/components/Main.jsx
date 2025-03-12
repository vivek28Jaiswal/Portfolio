import React from 'react';
import { Link } from 'react-router-dom';
import { GridBackgroundDemo } from '../Functions/Background';


const Main = () => {
  return (
    <div className='w-full py-20 flex flex-col mt-10 items-center gap-3 px-20 bg-black text-white min-h-screen'>
      <h1 className='font-rogshire text-7xl text-zinc-500'>LOREM ARE POES WINGSAD QER</h1>
      <p className='font-rogshire text-zinc-300 text-5xl w-[45vw] text-center'>A developers mind is a puzzle solver, constantly piecing together code to bring ideas to life. With every line written, they build bridges between creativity and technology, transforming visions into digital realities.</p>

      <div className='flex gap-2 w-[60vw]'>
        <div className='w-1/2 flex flex-col gap-2'>
          <div className='w-full bg-zinc-300 rounded-2xl h-[40vh]'></div>
          <div className='w-full bg-zinc-300 rounded-2xl h-[60vh]'></div>
          <div className='w-full bg-zinc-300 rounded-2xl h-[50vh]'></div>
        </div>
        <div className='w-1/2 flex flex-col gap-2' >
          <div className='w-full bg-zinc-300 rounded-2xl h-[70vh]'></div>
          <div className='w-full bg-zinc-300 rounded-2xl h-[40vh]'></div>
          <div className='w-full bg-zinc-300 rounded-2xl h-[40vh]'></div>
        </div>
      </div>

    </div>
  )
};

export default Main;