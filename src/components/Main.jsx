import React from 'react';

import { GlowingEffect } from "/src/components/ui/glowing-effect";

const Main = () => {
  return (
    <div className='w-full py-20 flex flex-col mt-10 items-center gap-3 px-20 bg-black text-white min-h-screen'>
      <h1 className='font-rogshire text-7xl text-zinc-500'>LOREM ARE POES WINGSAD QER</h1>
      <p className='font-rogshire text-zinc-300 text-5xl w-[45vw] text-center'>A developers mind is a puzzle solver, constantly piecing together code to bring ideas to life. With every line written, they build bridges between creativity and technology, transforming visions into digital realities.</p>
     

      <div className='flex gap-2 mt-6 w-[60vw]'>
        <div className='w-1/2 flex flex-col gap-2'>
          {/* Wrap each div with a container for the glowing effect */}
          <div className='relative'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full h-[40vh] bg-zinc-900/10 relative'></div>
          </div>
          
          <div className='relative'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/20 h-[60vh] relative'></div>
          </div>
          
          <div className='relative'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/10 h-[50vh] relative'></div>
          </div>
        </div>
        
        <div className='w-1/2 flex flex-col gap-2'>
          {/* Repeat for the second column */}
          <div className='relative'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/20 h-[70vh] relative'></div>
          </div>
          
          <div className='relative'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/10 h-[40vh] relative'></div>
          </div>
          
          <div className='relative'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/20 h-[40vh] relative'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;