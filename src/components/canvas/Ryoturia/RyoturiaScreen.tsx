import React, { useRef } from "react";
import { Mesh } from "three";
import RyoturiaScreenMaterial from "./RyoturiaScreenMaterial";
import { extend, MeshProps, useFrame } from "@react-three/fiber";

type Props = MeshProps & {};

const RyoturiaScreen = (props: Props) => {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2);
    }
  });
  return (
    <mesh ref={meshRef} {...props}>
      {/* @ts-ignore */}
      <ryoturiaScreenMaterial
        key={RyoturiaScreenMaterial.key}
        color="blue"
        time={3}
      />
    </mesh>
  );
};

extend({ RyoturiaScreenMaterial });

export default RyoturiaScreen;
