import React from 'react';
import { useRef } from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
//import { PerspectiveCamera } from '@react-three/drei';
import { Mesh } from 'three';

const Cube = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    if(!meshRef.current){
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });


 return(
  <mesh ref={meshRef} >
   
    <boxGeometry args = {[2,2,2]}/>
    <meshStandardMaterial color='blue'/>
  </mesh>
  
  )

}


const Home = () => {
  return (
    <div className = "canvas">
       <Canvas >
          <ambientLight/>
          <pointLight position={[10,0,30]}/>
          <group>
            <Cube/>
          </group>
         
       </Canvas>
  </div>
  )
}

export default Home
