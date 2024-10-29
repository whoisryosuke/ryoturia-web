import React, { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import RyoturiaScreenMaterial from "./RyoturiaScreenMaterial";
import { extend, MeshProps, useFrame } from "@react-three/fiber";
import { RepeatWrapping } from "three";

type Props = MeshProps & {};

const createTexture = () => {
  const texture = new TextureLoader().load(
    "./textures/screen-uv-r1-bottom-txt.png"
  );
  // texture.flipY = true;
  // texture.wrapS = RepeatWrapping;
  // texture.repeat.setX(-1);
  // texture.repeat.setY(1);
  return texture;
};

const RyoturiaScreen = (props: Props) => {
  const meshRef = useRef(null);
  const bottomTexture = useRef(createTexture());
  const marqueeTextTexture = useRef(
    new TextureLoader().load("./textures/title-marquee-text-v2.png")
  );

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
        bottomTextTexture={bottomTexture.current}
        marqueeTextTexture={marqueeTextTexture.current}
      />
    </mesh>
  );
};

extend({ RyoturiaScreenMaterial });

export default RyoturiaScreen;
