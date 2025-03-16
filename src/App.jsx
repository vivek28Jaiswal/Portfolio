import React, { useState, useEffect } from 'react'
import { GridBackgroundDemo } from "./Functions/Background";
import LandingPage from "./components/LandingPage";
import { Spotlight } from "./Functions/Spotlight";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Work from "./components/Work";
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Yeh important hai
      smooth: true,
    });

    setLocomotiveScroll(scrollInstance);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      scrollInstance.update(); // Resize hone par scroll update hoga
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollInstance) {
        scrollInstance.destroy(); // Cleanup properly
      }
    };
  }, []);


  const handleScroll = () => {
    A
    setScroll(true);
  };

  return (
    <div
      onScroll={handleScroll}
      data-scroll-container
      className="relative w-full overflow-x-hidden"
    >
      <div className="fixed inset-0">
        <GridBackgroundDemo />
      </div>
      <Spotlight fill="white" top="-5%" left="30%" r="120" />
      <div className="relative w-full">
        <LandingPage />
        <Main />
        <Section />
        <Work />
        <Footer />
      </div>
    </div>
  )
}

export default App
