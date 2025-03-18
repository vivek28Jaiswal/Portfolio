import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  

  const works = [
    {
      sno: "01", 
      name:"REBELLION",
      text:"Whether you're animating UI, SVG or creating immersive WebGL",
      vid: "/assets/Rebellion01.mp4"
    },
    {
      sno: "02",
      name:"MIRANDA", 
      text:"Whether you're animating UI, SVG or creating immersive WebGL",
      vid: "/assets/miranda.mp4"
    },
    {
      sno: "03",
      name:"OBYSS",
      text:"Whether you're animating UI, SVG or creating immersive WebGL", 
      vid: "/assets/modern muses.mp4"
    },
    {
      sno: "04",
      name:"MASTER",
      text:"Whether you're animating UI, SVG or creating immersive WebGL",
  vid: "/assets/Work03.mp4"
    },

  ];

  useEffect(() => {
    gsap.utils.toArray(".work-item").forEach((item, i) => {
      gsap.set(item, { zIndex: works.length - i });

      gsap.to(item, {
        y: 230 * i,
        rotate:0,
        opacity:1,
        scrollTrigger: {
          trigger: item,
          start: "top 50%", // Section starts fading out when its top hits the top of the viewport
          end: "bottom 20%", // Section ends fading out when its bottom hits the top of the viewport
          scrub:0.3 ,          // Smooth scrubbing effect

        },
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full h-[200vh] relative font-rogshire min-h-screen bg-black text-white p-10 overflow-hidden">
    {/* ✅ `overflow-hidden` to remove horizontal scrollbar */}
    <h1 className="font-rogshire text-8xl">Best Works</h1>
    <div className="w-full mt-20 rounded-2xl duration-300 flex flex-col gap-5">
      {works.map((work, idx) => (
        <div
          key={idx}
          className="work-item w-full rotate-[-5deg] border-b-[1.5px] px-5 py-1 border-zinc-600 rounded-xl h-[35vh] flex bg-black absolute left-0"
          style={{
            transformOrigin: "center", // ✅ Rotation fix
          }}
        >
          <div className="w-[5%] text-end text-6xl italic h-full">{work.sno}</div>
          <div className="w-[20%] p-5 text-6xl h-full">{work.name}</div>
          <div className="w-[25%] p-5 text-2xl h-full">{work.text}</div>
          <div className="w-[25%] p-5 text-2xl h-full">{work.desc}</div>
          <div className="w-[25%] text-6xl h-full">
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
                <source src={work.vid} type="video/mp4" />
              </video>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Work;
