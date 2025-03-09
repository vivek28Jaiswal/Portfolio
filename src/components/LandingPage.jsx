import React from 'react'
import { Link } from 'react-router-dom'
import { HoverBorderGradientDemo } from '../Functions/HoverBorderGradient'

const LandingPage = () => {
  return (
    <>
      <div className='text-white w-full rounded-lg border-zinc-800 font-rogshire border-x-[1.5px] h-screen bg-transparent '>

        <div className='flex justify-between items-center w-full px-10'>
          <button className='bg-white px-4  text-3xl text-black rounded-lg'> RESUME </button>

          <div className="flex text-zinc-300 text-3xl gap-5">
            {["about", "works", "contact us"].map((text, idx) => (
              <Link
                key={idx}
                className="relative group overflow-hidden"
                to="/"
              >
                <span className="block transition-all duration-300 group-hover:translate-y-[-100%]">
                  {text}
                </span>
                <span className="absolute top-0 left-0 text-zinc-400 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                  {text}
                </span>
                <div className="h-[2px] w-full bg-zinc-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              </Link>
            ))}
          </div>


        </div>

        <div className='flex flex-col text-4xl text-zinc-300 ml-10 mt-3 py-5 px-20'>
          <h1 className='-mb-4'>--UI/UX DESIGNING</h1>
          <h1 className='-mb-4'>--FREELANCING</h1>
          <h1>--3D MODELS</h1>
        </div>



        <div className='flex w-full relative justify-start h-[40vh] text-zinc-300 items-center'>
          <div className='w-[30%] p-10 flex font-light text-2xl flex-col gap-5'>
            <i class="ri-twitter-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-github-line"></i>

          </div>
          <div className='w-[53%] text-[28vh] flex flex-col justify-center  h-[40vh] '>
            <h1 className='mb-[-26vh] relative'>Web <span className='text-zinc-500 ml-4 absolute z-[9]'> Designer</span></h1>
            <h1><span className='text-zinc-500' >&</span> Developer</h1>
            <HoverBorderGradientDemo />

          </div>
          <div className='w-[7%] h-[40vh] bg-zinc-300'></div>
          <div className='w-[5%]  mt-[30vh] h-[10vh] bg-zinc-300'></div>

          <div className='absolute right-[-5%] mt-[2%] pointer-events-none w-[55%]'>
            <img src="/Modelimg.png" alt="" />
          </div>

        </div>

        <div className='flex w-full mt-3 h-[10vh] justify-center items-center'>
          <div className='w-[10%] h-full ml-[35vw] bg-zinc-300'>

          </div>
        </div>


      </div>
      <div className='flex text-white items-center text-5xl'>
        <h1 className='font-rewritten'>VOID</h1>
        <div className='h-[1.5px] w-full bg-zinc-800'>
        </div>
      </div>
    </>
  )
}

export default LandingPage
