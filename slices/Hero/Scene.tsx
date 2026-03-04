import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Center,
  Decal,
  Text3D,
  OrbitControls,
} from "@react-three/drei";
const Scene = () => {
  return (
    <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
      top left
      <meshStandardMaterial color="white" />
    </Text3D>
  );
};

export default Scene;
