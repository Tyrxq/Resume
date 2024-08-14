import React  from 'react';
import { useRef, useState } from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import {  OrbitControls } from '@react-three/drei';


const Cube = ({position, color, rotate, setRotate,opacity,id}) => {
  const meshRef = useRef(null);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [direction,setDirection] = useState(1);
  //const [currentPosition, setCurrentPosition] = useState(meshRef.current.position);

  const rotateInward = (mod) => {
    setCurrentRotation(currentRotation+1);
    if(id === 0 || id === 7){
      meshRef.current.rotation.x -= Math.PI/90 * mod * -1;
      meshRef.current.rotation.z += Math.PI/90 * mod * -1;
      meshRef.current.rotation.y -= Math.PI/180;
    }
    else if(id === 2|| id === 5){
      meshRef.current.rotation.x += Math.PI/90  * mod * -1;
      meshRef.current.rotation.z -= Math.PI/90  * mod * -1;
      meshRef.current.rotation.y -= Math.PI/90;
      
    }
    else if(id === 3 || id === 6 ){
      meshRef.current.rotation.x -= Math.PI/90 * mod * -1;
      meshRef.current.rotation.z -= Math.PI/90  * mod * -1;
      meshRef.current.rotation.y += Math.PI/90;
    }
    else if(id === 4 || id === 1){
      meshRef.current.rotation.x += Math.PI/90  * mod * -1;
      meshRef.current.rotation.z += Math.PI/90  * mod * -1;
      meshRef.current.rotation.y += Math.PI/90;
    }
    if(id >= 4 ){
      meshRef.current.position.y += Math.PI/180 * mod;
    }
    else{
      meshRef.current.position.y -= Math.PI/180 * mod;
    }
    
    if(id === 0 || id === 5){
      meshRef.current.position.x -= Math.PI/180 * mod;
      meshRef.current.position.z -= Math.PI/180 * mod;
    }
    if(id === 1 || id === 6){
      meshRef.current.position.x -= Math.PI/180 * mod;
      meshRef.current.position.z += Math.PI/180 * mod;
    }
    if(id === 3 || id === 4){
      meshRef.current.position.x += Math.PI/180 * mod;
      meshRef.current.position.z -= Math.PI/180 * mod;
    }
    if(id === 2 || id === 7){
      meshRef.current.position.x += Math.PI/180 * mod;
      meshRef.current.position.z += Math.PI/180 * mod;
    }

  }
  

  useFrame(() => {
  if(!meshRef.current){
      return;
    }
  if(rotate){ 
    rotateInward(direction);
  }
  if(currentRotation % 90 === 0){
    meshRef.current.rotation.x = 0;
    meshRef.current.rotation.z = 0;
    meshRef.current.rotation.y = 0;
    
  }
  if(currentRotation === 90){
    setCurrentRotation(0);
    setRotate(false);
    setDirection(direction*-1);
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
      <Cube position ={position} color={'red'} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {0}/>
      <Cube position={[x,y,z+space]} color={'purple'} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {1}/>
      <Cube position={[x+space,y,z+space]} color={'blue'} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {2} />
      <Cube position={[x+space,y,z]} color={'green'} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {3}/>
      <Cube position={[x+space,y+space,z]} color={'white'} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {4}/>
      <Cube position={[x,y+space,z]} color={'yellow'} rotate={rotate} setRotate={setRotate} opacity = {opacity}  id = {5}/>
      <Cube position={[x,y+space,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {6}/>
      <Cube position={[x+space,y+space,z+space]} color={'pink'} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {7}/>
     
      
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
            <CubeMatrix position={[0,0,0]} space={2} color={'black'} opacity={1}/>
          </group>
          
       </Canvas>
  </div>
  )
}

export default Home
