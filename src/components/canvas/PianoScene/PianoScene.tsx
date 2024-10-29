import { Environment, Lightformer } from "@react-three/drei";
import React from "react";
import Ryoturia from "../Ryoturia/Ryoturia";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  N8AO,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import CameraAngles from "./CameraAngles";
import WaveformLine from "../AudioViz/WaveformLine/WaveformLine";
type Props = {};

const PianoScene = (props: Props) => {
  return (
    <>
      <color attach="background" args={["#151515"]} />
      <fog color="#161616" attach="fog" near={12} far={30} />
      <Environment files="assets/neon_photostudio_1k.hdr" />
      <directionalLight position={[5, 5, 5]} castShadow />

      <Ryoturia />
      <CameraAngles />
      <WaveformLine position={[-2.25, 2, -9]} />

      <EffectComposer multisampling={8}>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        {/* <DepthOfField
          focusDistance={0}
          focalLength={1}
          bokehScale={2}
          height={480}
        /> */}
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </>
  );
};

export default PianoScene;
