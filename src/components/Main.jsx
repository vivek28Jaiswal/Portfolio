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
          <div className='bentoBox1 relative rounded-2xl'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
              <div className='w-full h-[40vh] bg-zinc-900/10 relative'>
              <div className="flex justify-between items-center h-16 w-full px-[1vw] py-[2vw]">
                <h2 className="text-4xl font-rogshire h-full flex items-center">Design meets code, crafting seamless experiences.</h2>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-[1vw]">
                <p className="text-2xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                I'm [Your Name], a UI/UX designer & frontend developer passionate about crafting intuitive, engaging, and interactive digital experiences. With a keen eye for detail and a love for seamless design, I bring ideas to life through thoughtful interfaces and smooth animations.
                </p>
                <img 
                  src="/assets/BentoLaptopScreen.png" 
                  alt="Design and Code"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[80%] object-cover rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>
          
          <div className='bentoBox2 relative rounded-2xl'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/20 h-[60vh] relative overflow-hidden'>
            <div className="flex justify-between items-center h-16 w-full px-[1vw] py-[2vw]">
                <h2 className="text-4xl font-rogshire h-full flex items-center">Hackathon Winner.</h2>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-[1vw]">
                <p className="text-2xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                I have participated in several hackathons, where I not only showcased my skills but also secured victories. These experiences have allowed me to push my limits, collaborate with talented individuals, and develop innovative solutions under pressure. Additionally, I have actively joined numerous coding events, continuously learning and connecting with like-minded enthusiasts to stay ahead in the tech world
                </p>
                <img 
                  // src="/assets/Bento3MobileMockup.png" 
                  src="/assets/SinglePhone.png"
                  alt="Design and Code"
                  className="mt-[3vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-auto max-h-[80%] object-contain rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>
          
          <div className='bentoBox3 relative rounded-2xl'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/10 h-[50vh] relative overflow-hidden'>
            <div className="flex justify-between items-center h-16 w-full px-[1vw] py-[2vw]">
                <h2 className="text-4xl font-rogshire h-full flex items-center">Hackathon Winner.</h2>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-[1vw]">
                <p className="text-2xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                I have participated in several hackathons, where I not only showcased my skills but also secured victories. These experiences have allowed me to push my limits, collaborate with talented individuals, and develop innovative solutions under pressure. Additionally, I have actively joined numerous coding events, continuously learning and connecting with like-minded enthusiasts to stay ahead in the tech world
                </p>
                <img 
                  // src="/assets/Bento3MobileMockup.png" 
                  src="/assets/SinglePhone.png"
                  alt="Design and Code"
                  className="mt-[3vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-auto max-h-[80%] object-contain rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className='w-1/2 flex flex-col gap-2'>
          {/* Repeat for the second column */}
          <div className='bentoBox4 relative rounded-2xl'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/20 h-[70vh] relative'>
            <div className="flex justify-between items-center h-16 w-full px-[1vw] py-[2vw]">
                <h2 className="text-4xl font-rogshire h-full flex items-center">From India.</h2>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-[1vw]">
                <p className="text-2xl text-[#FFFFFF] w-[80%] relative z-[99] font-rogshire leading-none">
                Passionate about UI/UX design and full-stack development, I merge creativity with technology to craft immersive, user-centric, and visually compelling digital experiences. From sleek interfaces to powerful web applications, I transform ideas into reality with innovation, precision, and clean, efficient code.
                </p>
                <img 
                  // src="/assets/Bento3MobileMockup.png" 
                  src="/assets/Bentoplanet.png"
                  alt="Design and Code"
                  className="mt-[3vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-auto max-h-[100%] object-contain rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>
          
          <div className='bentoBox5 relative rounded-2xl bg-[#E6E3E5]'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/10 h-[40vh] relative'>
            <div className="flex justify-between items-center h-16 w-full px-[1vw] py-[2vw]">
                <h2 className="text-5xl font-rogshire h-full flex items-center text-[#08090A]">Transform</h2>

                <div className="w-14 h-14 bg-[#141414] rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-white text-2xl"></i>
                </div>
              </div>
              <div className='flex justify-between items-center h-10 w-full px-[1.2vw]'>
                <h4 className='text-3xl font-rogshire flex items-center text-[#08090A] mb-[3vw]'>ideas into stunning realities.</h4>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-[1vw]">
                <button className="rounded-xl border-[0.6px] border-black bg-transparent px-14 py-2 text-[#08090A] text-4xl font-rogshire relative z-[99] flex items-center justify-center mt-[-1vw]">
                  Create ‧ Innovate ‧ Inspire
                </button>
                <img 
                  // src="/assets/Bento3MobileMockup.png" 
                  src="/assets/BentoWork.png"
                  alt="Design and Code"
                  className="mt-[1vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-auto max-h-[100%] object-contain rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>
          
          <div className='bentoBox6 relative rounded-2xl'>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className='w-full bg-zinc-900/20 h-[40vh] relative'>
            <div className="flex justify-between items-center h-16 w-full px-[1vw] py-[2vw]">
                <h2 className="text-4xl font-rogshire h-full flex items-center">Design meets code, crafting seamless experiences.</h2>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-up-line text-black text-2xl"></i>
                </div>
              </div>
              <div className="relative w-full h-[calc(100%-4rem)] px-[1vw]">
                <p className="text-2xl text-[#FFFFFF] w-[90%] relative z-[99] font-rogshire leading-none">
                I'm [Your Name], a UI/UX designer & frontend developer passionate about crafting intuitive, engaging, and interactive digital experiences. With a keen eye for detail and a love for seamless design, I bring ideas to life through thoughtful interfaces and smooth animations.
                </p>
                <img 
                  src="/assets/BentoLaptopScreen.png" 
                  alt="Design and Code"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[80%] object-cover rounded-lg z-[9]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;