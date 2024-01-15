import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import {  OrbitControls } from '@react-three/drei';


const Cube = ({position, color}) => {
  const meshRef = useRef(null);
  const [rotate,setRotate] = useState(false);

  useFrame(() => {
  if(!meshRef.current){
      return;
    }
  if(rotate){
    meshRef.current.rotation.x += 0.01;
    //meshRef.current.rotation.y += 0.01;
  }
   
  });


 return(
  <mesh ref={meshRef} onClick={e => setRotate(!rotate)} position={position}>
    <boxGeometry args = {[2,2,2]}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )

}

const Home = () => {
  
  return (
    <div className = "canvas">
       <Canvas camera = {{ position: [1.5,1.5,1.5],fov:90}}>
          <ambientLight/>
          <pointLight position={[10,0,30]}/>
          <OrbitControls/>
          <group>
            <Cube/>
            <Cube position={[0,3,0]} color={"green"}/>
            <Cube position={[3,0,0]} color={"blue"}/>
            <Cube position={[0,0,3]} color={"red"}/>
            <Cube position={[3,0,3]} color={"pink"}/>
            <Cube position={[3,3,3]} color={"black"}/>
            <Cube position={[3,3,0]} color={"yellow"}/>
            <Cube position={[0,3,3]} color={"purple"}/>
          </group>
       </Canvas>
  </div>
  )
}

export default Home
