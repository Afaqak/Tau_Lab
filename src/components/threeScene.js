import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  Stage,
  useCubeTexture,
  useTexture,
  Plane,
} from "@react-three/drei";
import { OrbitControls, Html, MeshWobbleMaterial } from "@react-three/drei";
import { TextureLoader, CubeTextureLoader } from "three";
import Button from "./button";
import { motion } from "framer-motion";
import image1 from "../assets/image-1.png";

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
          color={color}
          ref={material}
          speed={2}
          roughness={1}
          clearcoat={1}
          metalness={1.5}
          reflectivity={1}
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
        intensity={24}
        color={color}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
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
        rotation={-0.3}
      />
      <Coin
        size={[6, 6, 1.6, 128]}
        position={[-16, -3, -5]}
        color="#a845ea"
        rotation={0.6}
      />
      <Coin
        size={[8, 8, 2, 128]}
        position={[-18, 22, -5]}
        color="#a845ea"
        rotation={0.4}
      />
    </group>
  );
};

const Background = () => {
  const texture = useTexture(image1);
  return (
    <mesh rotation={[0.8, 0, 0.1]} position={[3, 18n, -20]}>
      <planeGeometry args={[80, 50]} />
      <MeshWobbleMaterial speed={0.4} factor={0.2} map={texture} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas shadows camera={{ position: [-3, -20, 20], fov: 50 }}>
      {/* <pointLight intensity={4} position={[0, 10, 5]} /> */}
      <ambientLight intensity={1.2} color={"#a845ea"} />
      <DirectionalLights />
      <Background />
      <CustomContainer />
      {/* <HtmlContent /> */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
