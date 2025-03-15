import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex items-center relative  min-h-screen  font-rewritten bg-white text-black'>
      <div className='h-[75vh] border-y-[2px] relative border-black p-5 px-10 w-full'>

        <h1 className='w-[50vw]'>Designed with passion to deliver seamless experiences. Stay connected with us for updates and insights.</h1>
        <h1 className='text-[23vh]'>WE MAKE CREATIVE</h1>
        <div className='text-[23vh] mt-[-10vh] items-center flex gap-5'>
          <h1>THINGS</h1>
          <button className='h-[20vh] w-[20vh] group flex items-center justify-center text-8xl text-white rounded-lg bg-blue-300'>
            <div className="relative overflow-hidden">
              <span className="block transition-all duration-300 group-hover:translate-x-[100%] group-hover:translate-y-[-100%]">
                <i class="ri-arrow-right-up-line "></i>
              </span>
              <span className="absolute top-0 left-0 translate-x-[-100%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                <i class="ri-arrow-right-up-line "></i>
              </span>
            </div>

          </button>
        </div>
        <div className='w-[40vw] h-[30vh] p-10 bottom-0 flex flex-col gap-10 right-0 absolute'>
          <div className='flex gap-5'>
            <button className='border-t-[2px] flex gap-3 justify-center items-center group w-[12vw] border-zinc-400 px-3'>INSTAGRAM
              <div className="relative text-zinc-400  overflow-hidden">
                <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
                <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
              </div></button>
            <button className='border-t-[2px] flex gap-3 justify-center items-center group w-[12vw]  border-zinc-400 px-3'>TWITTER
              <div className="relative text-zinc-400  overflow-hidden">
                <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
                <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
              </div></button>
            <button className='border-t-[2px] flex gap-3 justify-center items-center group w-[12vw] border-zinc-400 px-3'>GITHUB
              <div className="relative text-zinc-400  overflow-hidden">
                <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
                <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
              </div></button>
          </div>
          <div className='flex gap-5'>
            <button className='border-t-[2px] flex gap-3 justify-center items-center group w-[12vw] border-zinc-400 px-3'>FIVER
              <div className="relative text-zinc-400  overflow-hidden">
                <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
                <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
              </div></button>
            <button className='border-t-[2px] flex gap-3 justify-center items-center group w-[12vw] border-zinc-400 px-3'>BEHANCE
              <div className="relative text-zinc-400  overflow-hidden">
                <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
                <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
              </div></button>
            <button className='border-t-[2px] flex gap-1 justify-center items-center group w-[12vw] border-zinc-400 px-3'>CONTACT US
              <div className="relative text-zinc-400  overflow-hidden">
                <span className="block transition-all duration-300 group-hover:translate-x-[150%] group-hover:translate-y-[-100%]">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
                <span className="absolute top-0 left-0 translate-x-[-150%] transition-all duration-300 translate-y-full group-hover:translate-x-0  group-hover:translate-y-0">
                  <i class="ri-arrow-right-up-line text-lg"></i>
                </span>
              </div></button>
          </div>
        </div>
      </div>
      <div className='w-full flex absolute bottom-0 items-center px-10 h-[12vh]'>
        <h1> &copy; 2025 Copyrights  </h1>
      </div>

    </div>
  )
}

export default Footer
