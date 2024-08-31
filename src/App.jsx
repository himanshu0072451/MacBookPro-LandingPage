import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Mac from "./Mac";

const App = () => {
  return (
    <div className="main h-screen w-full relative">
      <div className="top-txt font-['Helvetica'] text-center w-1/3 text-white absolute top-[6.5rem] left-1/2 -translate-x-1/2">
        <h1 className="text-5xl text-gradient font-bold tracking-tighter">macbook pro.</h1>
        <h1>oh so pro!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quod ducimus aut!
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
          }
        />
        <ScrollControls>
          <Mac />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
