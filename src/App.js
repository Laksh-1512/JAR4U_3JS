import React, { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Splat, OrbitControls, Shadow, Stars, SpotLight, Sparkles, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three"; 

function App() {
  const url = `./natraj.splat`;
  const [autoRotate, setAutoRotate] = useState(true);
  const position = [0, 0, 0]; 
  const scale = [2.5, 2.5, 2.5];

 
  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  return (
    <div className="App" style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [3, 0.5, 3.5] }}>

        <Splat src={url} scale={[1.5, 1.5, 1.5]} />
        <Sparkles scale={2} />

        <mesh position={position} scale={scale}>
          <boxGeometry />
          <meshBasicMaterial 
            color="transparent"
            opacity={0.1}
            wireframe={true}
            wireframeLinecap={true} 
            wireframeLineColor="white"
            wireframeLineWidth={0.1} 
          />
        </mesh>
        
        <SpotLight position={[0 ,4.5 ,1]} intensity={0.000001} radiusTop={0.00001} radiusBottom={1.2} />
        <OrbitControls autoRotate={autoRotate} rotateSpeed={5} />
      </Canvas>

      <Shadow
        color="black"
        colorStop={0}
        opacity={0.5}
        fog={false}
      />

      <button
        className="bg-gray-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleAutoRotate}
        style={{ position: "absolute", top: "10px", right: "10px", zIndex: "999" }}
      >
        {autoRotate ? "Stop Auto Rotation" : "Start Auto Rotation"}
      </button>
    </div>
  );
}

export default App;
