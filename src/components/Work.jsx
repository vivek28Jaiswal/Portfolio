import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [Window, setWindow] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    // Adjust y value based on screen width
    let yValue;
    if (Window> 1440) {
      yValue = 420; // Desktop
    } else if (Window>1305) {
      yValue = 270; // 15-inch laptop
    } else {
      yValue = 220; // Smaller laptops
    }

    gsap.utils.toArray(".work-item").forEach((item, i) => {
      gsap.set(item, { zIndex: works.length - i });

      gsap.to(item, {
        y: yValue * i, // Use dynamic y value
        rotate: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 50%",
          end: "bottom 20%",
          scrub: 0.3,
        },
      });
    });

    ScrollTrigger.refresh();
  }, [Window]);

  return (
    <div className="w-full lg:h-[200vh] relative font-rogshire min-h-screen bg-black text-white p-10 overflow-hidden">
    {/* ✅ `overflow-hidden` to remove horizontal scrollbar */}
    <h1 className="font-rogshire text-8xl">Best Works</h1>
    <div className="w-full mt-20 rounded-2xl duration-300 flex flex-col gap-5">
      {works.map((work, idx) => (
        <div
          key={idx}
          className="work-item w-full rotate-[-5deg]  border-b-[1.5px] 2xl:mt-5 px-5 py-1 border-zinc-600 rounded-xl h-[35vh] flex bg-black absolute left-0"
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
