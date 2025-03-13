import React from "react";
import { GridBackgroundDemo } from "./Functions/Background";
import LandingPage from "./components/LandingPage";
import { Spotlight } from "./Functions/Spotlight";
import Main from "./components/Main";
import Section from "./components/Section";
import Work from "./components/Work";


const App = () => {
  return (
    <div className="h-screen relative w-full flex items-center justify-center overflow-x-hidden">
      <GridBackgroundDemo />
      <Spotlight fill="white" top="" left="" r="120" />
      <div className="w-full absolute h-screen ">
        <LandingPage />

        <Main />
        <Section />
        <Work />
      </div>

    </div>
  )
}

export default App
