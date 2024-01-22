import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import {  OrbitControls } from '@react-three/drei';


const Cube = ({position, color, rotate, setRotate}) => {
  const meshRef = useRef(null);
  

  useFrame(() => {
  if(!meshRef.current){
      return;
    }
  if(rotate){
    //const delta = meshRef.current.position.y + 0.0001;
    
    meshRef.current.rotation.x += 0.01;
    //meshRef.current.rotation.y += 0.01;
    //meshRef.current.position.y = 7 * Math.sin(delta) + 3
  }
   
  });


 return(
  <mesh ref={meshRef} onClick={e => setRotate(!rotate)} position={position}>
    <boxGeometry args = {[2,2,2]}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )

}

const CubeMatrix = ({position,color,space}) => {

  const [x,y,z] = position;
  const [rotate,setRotate] = useState(false);
  return(
    <group>
      <Cube position ={position} color={color} rotate={rotate} setRotate={setRotate}/>
      <Cube position={[x,y+space,z]} color={color} rotate={rotate} setRotate={setRotate}/>
      <Cube position={[x+space,y,z]} color={"blue"} rotate={rotate} setRotate={setRotate}/>
      <Cube position={[x,y,z+space]} color={"red"} rotate={rotate} setRotate={setRotate}/>
      <Cube position={[x+space,y,z+space]} color={"pink"} rotate={rotate} setRotate={setRotate}/>
      <Cube position={[x+space,y+space,z+space]} color={"black"} rotate={rotate} setRotate={setRotate}/>
      <Cube position={[x+space,y+space,z]} color={"yellow"} rotate={rotate} setRotate={setRotate}/>
      <Cube position={[x,y+space,z+space]} color={"purple"} rotate={rotate} setRotate={setRotate}/>
    </group>
  )
}

const Home = () => {
  
  return (
    <div className = "canvas">
       <Canvas camera = {{ position: [5.5,5.5,5.5],fov:90}}>
          <ambientLight/>
          <pointLight position={[10,0,30]}/>
          <OrbitControls/>
          <group>
            <CubeMatrix position={[0,0,0]} space={3}/>
          </group>
          
       </Canvas>
  </div>
  )
}

export default Home
