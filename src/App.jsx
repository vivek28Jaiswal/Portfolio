import React from "react";
import { GridBackgroundDemo } from "./Functions/Background";
import LandingPage from "./components/LandingPage";
import { Spotlight } from "./Functions/Spotlight";

const App = () => {
  return (
    <div className="h-screen relative w-full flex items-center justify-center overflow-x-hidden">
      <GridBackgroundDemo />
      <Spotlight fill="white" />
    <div className="w-full absolute h-screen  p-10">
      <LandingPage />

    </div>
    </div>
  )
}

export default App
