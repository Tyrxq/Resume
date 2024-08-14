import React from 'react';
import { useRef, useState } from 'react';
import {useFrame} from "@react-three/fiber";


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

export default Cube
