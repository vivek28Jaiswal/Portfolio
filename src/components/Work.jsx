import React from 'react'

const Work = () => {
  const works = [
    {
      sno: "01", 
      name:"REBELLION",
      text:"Whether you're animating UI, SVG or creating immersive WebGL",
      desc:"Passionate about UI/UX design and full-stack development, I merge creativity with technology to craft immersive, user-centric, and visually compelling digital experiences. From sleek interfaces to powerful web applications, I transform ideas into reality with innovation, precision, and clean, efficient code.",
      img: "/assets/image1.png"

    },
    {
      sno: "02",
      name:"MIRANDA", 
      text:"Whether you're animating UI, SVG or creating immersive WebGL",
      desc:"Passionate about UI/UX design and full-stack development, I merge creativity with technology to craft immersive, user-centric, and visually compelling digital experiences. From sleek interfaces to powerful web applications, I transform ideas into reality with innovation, precision, and clean, efficient code.",
      img: "../assets/image2.png"

    },
    {
      sno: "03",
      name:"OBYSS",
      text:"Whether you're animating UI, SVG or creating immersive WebGL", 
      desc:"Passionate about UI/UX design and full-stack development, I merge creativity with technology to craft immersive, user-centric, and visually compelling digital experiences. From sleek interfaces to powerful web applications, I transform ideas into reality with innovation, precision, and clean, efficient code.",
      img: "../assets/image3.png"

    },
    {
      sno: "04",
      name:"MASTER",
      text:"Whether you're animating UI, SVG or creating immersive WebGL",
      desc:"Passionate about UI/UX design and full-stack development, I merge creativity with technology to craft immersive, user-centric, and visually compelling digital experiences. From sleek interfaces to powerful web applications, I transform ideas into reality with innovation, precision, and clean, efficient code.",
      img: "../assets/image4.png"

    }
  ]
  return (
    <div className='w-full relative font-rogshire min-h-screen bg-black  text-white p-10'>
      <h1 className='font-rogshire text-8xl'>Best Works</h1>
      <div className='w-full mt-20  p-5 rounded-2xl duration-300 flex flex-col gap-5'>
      {works.map((work, idx) => (
       <div key={idx} className='w-full h-[35vh] hover:bg-zinc-900/20 flex bg-transparent'>
        <div className='w-[5%] text-end text-6xl italic h-full '>{work.sno}</div>
        <div className='w-[20%] p-5 text-6xl h-full '>{work.name}</div>
        <div className='w-[25%] p-5 text-2xl  h-full'>{work.text}</div>
        <div className='w-[25%] p-5  text-2xl h-full'>{work.desc}</div>
        <div className='w-[25%]  text-6xl h-full'><img className='h-full w-full object-cover' src={work.img} alt="" /></div>
      
    </div> ) )}
    </div>

    </div>
  )
}

export default Work
