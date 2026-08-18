import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    // 6000 is divisible by 3 (2000 3D points [x, y, z])
    const data = new Float32Array(6000);
    random.inSphere(data, { radius: 1.2 });
    // Sanitize data array to eliminate any NaN values that crash WebGL
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0;
    }
    return data;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#332F3A"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
