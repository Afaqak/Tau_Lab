import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  Stage,
  useCubeTexture,
  useTexture,
} from "@react-three/drei";
import { OrbitControls, Html } from "@react-three/drei";
import { TextureLoader, CubeTextureLoader } from "three";
import Button from "./button";
import { motion } from "framer-motion";

const Coin = ({ position, color, rotation, size }) => {
  const coin = useRef(null);
  const time = useRef(0);
  const material = useRef(null);

  useFrame((state, delta) => {
    time.current += delta;
    coin.current.rotation.z = rotation + Math.sin(time.current) * 0.1;
  });

  // const hdrCubeMapTexture = useTexture("../assets/image-1.png");

  return (
    <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh ref={coin}>
        <cylinderGeometry args={size} />
        <meshPhysicalMaterial
          color={color} // Set the color you want
          ref={material}
          speed={2}
          roughness={1} // Adjust roughness as needed
          clearcoat={1} // Increase clearcoat for added metallic appearance
          metalness={1.7} // Increase metalness to make it more metallic
          reflectivity={1} // Set the reflectivity as needed
          fog="#c31fff"
        />
      </mesh>
    </group>
  );
};

const DirectionalLights = () => {
  const lights = [];
  const lightColors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];
  const lightDistance = 20;

  for (let i = 0; i < lightColors.length; i++) {
    const angle = (i / lightColors.length) * Math.PI * 2;
    const x = Math.cos(angle) * lightDistance;
    const y = Math.sin(angle) * lightDistance;
    const z = -10;
    const color = lightColors[i];

    lights.push(
      <directionalLight
        key={i}
        position={[x, y, z]}
        intensity={14}
        color={color}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
    );
  }

  return <>{lights}</>;
};

// const HtmlContent = () => {
//   return <Html fullscreen></Html>;
// };

const CustomContainer = () => {
  return (
    <group>
      <Coin
        size={[8, 8, 2, 128]}
        position={[20, 11, 0]}
        color="#a845ea"
        rotation={0.1}
      />
      <Coin
        size={[6, 6, 1.6, 128]}
        position={[-16, -3, -5]}
        color="#a845ea"
        rotation={-0.4}
      />
      <Coin
        size={[8, 8, 2, 128]}
        position={[-18, 22, -5]}
        color="#a845ea"
        rotation={-0.4}
      />
    </group>
  );
};

const ThreeScene = () => {
  return (
    <Canvas shadows camera={{ position: [-3, -20, 20], fov: 50 }}>
      {/* <pointLight intensity={4} position={[0, 10, 5]} /> */}
      <ambientLight intensity={1} color={"#a845ea"} />
      <DirectionalLights />
      <CustomContainer />
      {/* <HtmlContent /> */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
