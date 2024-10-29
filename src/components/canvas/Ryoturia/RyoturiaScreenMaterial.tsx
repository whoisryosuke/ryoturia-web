import * as THREE from "three";
import { useFrame, extend, MeshProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { shaderMaterial } from "@react-three/drei";

import vertex from "./shaders/shader.vert";
import fragment from "./shaders/shader.frag";

const RyoturiaScreenMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.2, 0.025),
    bottomTextTexture: new THREE.Texture(),
    marqueeTextTexture: new THREE.Texture(),
  },
  vertex,
  fragment
);

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
RyoturiaScreenMaterial.key = THREE.MathUtils.generateUUID();

export default RyoturiaScreenMaterial;
