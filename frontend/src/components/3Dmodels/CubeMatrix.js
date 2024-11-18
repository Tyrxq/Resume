import React from 'react'
import Cube from './Cube';
import { useState } from 'react';

const CubeMatrix = ({position,color,space, opacity}) => {

    const [x,y,z] = position;
    const [rotate,setRotate] = useState(false);
    return(
      <group>
        <Cube position ={position} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {0}/>
        <Cube position={[x,y,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {1}/>
        <Cube position={[x+space,y,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {2} />
        <Cube position={[x+space,y,z]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {3}/>
        <Cube position={[x+space,y+space,z]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {4}/>
        <Cube position={[x,y+space,z]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity}  id = {5}/>
        <Cube position={[x,y+space,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {6}/>
        <Cube position={[x+space,y+space,z+space]} color={color} rotate={rotate} setRotate={setRotate} opacity = {opacity} id = {7}/>
       
        
      </group>
    )
  }

export default CubeMatrix
