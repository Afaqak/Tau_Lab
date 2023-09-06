import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, MeshDistortMaterial } from "@react-three/drei";

import image1 from "../assets/image-77.jpg";

const Background = () => {
  const texture = useTexture(image1);
  const material = useRef();

  useFrame(({ clock }) => {
    material.current.map.offset.x = Math.sin(clock.elapsedTime) * 0.01;
  });

  return (
    <mesh rotation={[0.8, 0, 0.14]} position={[9, 16, -15]}>
      <planeGeometry args={[124, 58]} />
      <MeshDistortMaterial
        speed={0.4}
        factor={0.4}
        ref={material}
        map={texture}
      />
    </mesh>
  );
};

const BackgroundScene = () => {
  return (
    <Canvas shadows camera={{ position: [-3, -20, 20], fov: 50 }}>
      <ambientLight intensity={1.2} color={"white"} />
      <ambientLight intensity={1.2} color={"white"} />
      <Suspense fallback={null}>
        <Background />
      </Suspense>
    </Canvas>
  );
};

export default BackgroundScene;
