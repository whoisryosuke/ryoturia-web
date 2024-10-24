import { Environment } from "@react-three/drei";
import React from "react";
import RyoturiaModel from "../Ryoturia/RyoturiaModel";

type Props = {};

const PianoScene = (props: Props) => {
  return (
    <>
      <Environment files="assets/neon_photostudio_1k.hdr" />
      <directionalLight position={[5, 5, 5]} />
      <RyoturiaModel />
    </>
  );
};

export default PianoScene;
