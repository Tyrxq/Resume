import React  from 'react';
import {Canvas} from "@react-three/fiber";
import {  OrbitControls } from '@react-three/drei';
import CubeMatrix from '../components/3Dmodels/CubeMatrix';





const Home = () => {
  
  return (
    <div className = "canvas">
       <Canvas color={'black'} camera = {{ position: [25,5.5,7.5],fov:30}}>
          <ambientLight/>
          <pointLight position={[10,0,30]}/>
          <OrbitControls/>
          <group>
            <CubeMatrix position={[0,0,0]} space={2} color={'black'} opacity={.2}/>
          </group>
          
       </Canvas>
  </div>
  )
}

export default Home
