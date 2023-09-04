import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, MeshWobbleMaterial } from "@react-three/drei";
import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

const Coin = ({ position, color, rotation }) => {
  const coin = useRef(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    coin.current.rotation.z = rotation + Math.sin(time.current) * 0.1; // Adjust the rotation amount as needed
  });

  return (
    <group position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh ref={coin} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.2, 128]} />
        <MeshWobbleMaterial
          color={color}
          speed={2}
          factor={0.1}
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [-3, -12, 17], fov: 60 }}>
        <Stage>
          <ambientLight intensity={0.4} />
          <directionalLight castShadow position={[4, 10, 10]} intensity={0.6} />
          <Coin position={[-3, 11, 0]} color="gold" rotation={0.1} />
          <Coin position={[-2, 11, -5]} color="silver" rotation={-0.1} />
          <Coin position={[5, 10, -2]} color="copper" rotation={0.2} />
        </Stage>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ThreeScene;
