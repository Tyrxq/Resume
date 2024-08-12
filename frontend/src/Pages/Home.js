import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import {  OrbitControls } from '@react-three/drei';


const Cube = ({position, color, rotate, setRotate,opacity}) => {
  const meshRef = useRef(null);
  const [currentRotation, setCurrentRotation] = useState(0);
  

  useFrame(() => {
  if(!meshRef.current){
      return;
    }
  if(rotate){
    //const delta = meshRef.current.position.y + 0.0001;
    //console.log(meshRef.current.rotation.x);
    meshRef.current.rotation.x += Math.PI/90;
    setCurrentRotation(currentRotation+2);
    //console.log(currentRotation % (Math.PI/2));
    //meshRef.current.rotation.y += 0.01;
    //meshRef.current.position.y = 7 * Math.sin(delta) + 3
  }
  if(currentRotation % 90 === 0 ){
    setRotate(false);
  }
   
  });


 return(
  <mesh ref={meshRef} onClick={e => setRotate(!rotate)} position={position}>
    <boxGeometry args = {[2,2,2]}/>
    <meshStandardMaterial color={color} opacity={opacity} transparent={true}/>
  </mesh>
  )

}

const CubeMatrix = ({position,color,space, opacity}) => {

  const [x,y,z] = position;
  const [rotate,setRotate] = useState(false);
  return(
    <group>
      <Cube position ={position} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
      <Cube position={[x,y+space,z]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
      <Cube position={[x+space,y,z]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
      <Cube position={[x,y,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
      <Cube position={[x+space,y,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
      <Cube position={[x+space,y+space,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
      <Cube position={[x+space,y+space,z]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
      <Cube position={[x,y+space,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}/>
    </group>
  )
}

const Home = () => {
  
  return (
    <div className = "canvas">
       <Canvas color={'black'} camera = {{ position: [5.5,5.5,5.5],fov:90}}>
          <ambientLight/>
          <pointLight position={[10,0,30]}/>
          <OrbitControls/>
          <group>
            <CubeMatrix position={[0,0,0]} space={2} color={'rgba(255, 255, 255)'} opacity={.2}/>
          </group>
          
       </Canvas>
  </div>
  )
}

export default Home
