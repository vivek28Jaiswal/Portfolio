import React from 'react'
import Svg from './ui/Svg'

const Skills = () => {
  return (
    <div className='w-full flex flex-col justify-between pb-[30vh] items-end min-h-screen text-white '>
      <div className='flex flex-col items-end '>
        <h1 className='font-rogshire text-8xl text-end'>Skills</h1>
        <p className='text-end text-3xl w-[30vw]'>Whether you're animating UI, SVG or creating immersive WebGL experiences, GSAP has your back.</p>

      </div>

      <div>
        <div className='h-[3px] w-[90vw] flex gap-44 relative text-black text-3xl text-black bg-zinc-300'>
          <div className='h-[50px] mt-[-4vh] relative w-[50px] flex justify-center items-center bg-zinc-300 rounded-full'>
            <i class="ri-reactjs-fill"></i>
            <div className='absolute top-[30vh] left-5 gap-3 flex'>
              <div className='  translate-y-[-50%] scale-[210%]'>
                <Svg />
              </div>
              <div className='w-[20vw] mt-[-15vh] text-white h-[30vh] '>
                <h1 className='text-5xl'>React JS</h1>
                <p className='text-2xl text-zinc-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
            </div>


          </div>
          <div className='h-[50px] mt-[-4vh] w-[50px]   relative flex justify-center items-center bg-zinc-300 rounded-full'>
            <i class="ri-reactjs-fill"></i>
            <div className='absolute top-[-20vh] left-5 gap-10 flex'>
              <div className='  translate-y-[-50%] scale-[210%]'>
                <Svg />
              </div>
              <div className='w-[20vw] mt-[-15vh] text-white h-[30vh] '>
                <h1 className='text-5xl'>React JS</h1>
                <p className='text-2xl text-zinc-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
            </div>
          </div>
          <div className='h-[50px] mt-[-4vh] w-[50px]   relative  flex justify-center items-center bg-zinc-300 rounded-full'>
            <i class="ri-reactjs-fill"></i>
            <div className='absolute top-[30vh] left-5 gap-3 flex'>
              <div className='  translate-y-[-50%] scale-[210%]'>
                <Svg />
              </div>
              <div className='w-[20vw] mt-[-15vh] text-white h-[30vh] '>
                <h1 className='text-5xl'>React JS</h1>
                <p className='text-2xl text-zinc-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
            </div>
          </div>
          <div className='h-[50px] mt-[-4vh] w-[50px]  relative  flex justify-center items-center bg-zinc-300 rounded-full'>
            <i class="ri-reactjs-fill"></i>
            <div className='absolute top-[-20vh] left-5 gap-3 flex'>
              <div className='  translate-y-[-50%] scale-[210%]'>
                <Svg />
              </div>
              <div className='w-[20vw] mt-[-15vh] text-white h-[30vh]'>
                <h1 className='text-5xl'>React JS</h1>
                <p className='text-2xl text-zinc-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
            </div>
          </div>
          <div className='h-[50px] mt-[-4vh] w-[50px]   relative flex justify-center items-center bg-zinc-300 rounded-full'>
            <i class="ri-reactjs-fill"></i>
            <div className='absolute top-[30vh] left-5 gap-3 flex'>
              <div className='  translate-y-[-50%] scale-[210%]'>
                <Svg />
              </div>
              <div className='w-[20vw] mt-[-15vh] text-white h-[30vh] '>
                <h1 className='text-5xl'>React JS</h1>
                <p className='text-2xl text-zinc-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills
