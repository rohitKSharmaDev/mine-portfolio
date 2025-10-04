import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

import CanvasLoader from '../Loader';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    // Generate a unique random interval between 2s and 5s for each ball
    const randomInterval = Math.random() * (5000 - 2000) + 2000;

    const interval = setInterval(() => {
      setIsWhite((prev) => !prev);
    }, randomInterval);

    return () => clearInterval(interval);
  }, []);

  const { color } = useSpring({
    color: isWhite ? '#ffffff' : '#fff8eb',
    config: { duration: 1000 },
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />

      <animated.mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <animated.meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
      </animated.mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
