import { Environment } from "@react-three/drei";
import React from "react";
import Ryoturia from "../Ryoturia/Ryoturia";

type Props = {};

const PianoScene = (props: Props) => {
  return (
    <>
      <Environment files="assets/neon_photostudio_1k.hdr" />
      <directionalLight position={[5, 5, 5]} />
      <Ryoturia />
    </>
  );
};

export default PianoScene;
