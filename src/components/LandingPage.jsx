import React from 'react';
import { Link } from 'react-router-dom';
import { HoverBorderGradientDemo } from '../Functions/HoverBorderGradient';

const LandingPage = () => {
  return (
    <div div className='p-10'>
      <div className='text-white w-full rounded-lg border-zinc-800 font-rogshire border-b-[1.5px] border-x-[1.5px] lg:min-h-[90vh] bg-transparent'>
        
        {/* Header Section */}
        <div className='flex justify-between items-center w-full px-5 lg:px-10 py-5'>
          <button className='bg-white px-4 py-2 text-xl lg:text-3xl text-black rounded-lg'> RESUME </button>

          <div className='flex text-zinc-300 text-xl lg:text-3xl gap-3 lg:gap-5'>
            {['about', 'works', 'contact us'].map((text, idx) => (
              <Link
                key={idx}
                className='relative group overflow-hidden'
                to='/'
              >
                <span className='block transition-all duration-300 group-hover:translate-y-[-100%]'>
                  {text}
                </span>
                <span className='absolute top-0 left-0 text-zinc-400 transition-all duration-300 translate-y-full group-hover:translate-y-0'>
                  {text}
                </span>
                <div className='h-[2px] w-full bg-zinc-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100'></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className='flex flex-col text-2xl lg:text-4xl text-zinc-300 ml-5 lg:ml-10 mt-3 py-5 px-10 lg:px-20'>
          <h1 className='-mb-2 lg:-mb-4'>--UI/UX DESIGNING</h1>
          <h1 className='-mb-2 lg:-mb-4'>--FREELANCING</h1>
          <h1>--3D MODELS</h1>
        </div>

        {/* Main Content Section */}
        <div className='flex w-full relative justify-start h-[30vh] lg:h-[40vh] text-zinc-300 items-center'>
          <div className='w-1/4 p-5 lg:p-10 flex font-light text-lg lg:text-2xl flex-col gap-3 lg:gap-5'>
            <i className='ri-twitter-fill'></i>
            <i className='ri-instagram-line'></i>
            <i className='ri-github-line'></i>
          </div>
          <div className='w-1/2 text-[12vh] lg:text-[28vh] flex flex-col justify-center h-full'>
            <h1 className='mb-[-12vh] lg:mb-[-26vh] relative'>Web <span className='text-zinc-500 ml-2 lg:ml-4 absolute z-[9]'> Designer</span></h1>
            <h1><span className='text-zinc-500'>&</span> Developer</h1>
            <HoverBorderGradientDemo />
          </div>
          <div className='w-[10%] h-full bg-zinc-300'></div>
          <div className='w-[5%] mt-[15vh] lg:mt-[30vh] h-[5vh] lg:h-[10vh] bg-zinc-300'></div>

          <div className='absolute right-0 lg:right-[-3%] mt-[2%] pointer-events-none w-1/2 lg:w-[60%]'>
            <img src='/Modelimg.png' alt='' className='w-full h-auto' />
          </div>
        </div>

        {/* Footer Section */}
        <div className='flex w-full mt-3 h-[8vh] lg:h-[10vh] justify-center items-center'>
          <div className='w-[20%] lg:w-[10%] h-full ml-[30vw] lg:ml-[35vw] bg-zinc-300'></div>
        </div>

        <div className=' text-white mt-[10vh] relative 2xl:top-[-4vh] 2xl:mt-[20vh] lg:top-[-6vh] lg:mt-[25vh] items-center text-4xl lg:text-5xl'>
          <h1 className='font-rewritten absolute'>VOID</h1>
       
        </div>
      </div>
    </div>
  );
};

export default LandingPage;