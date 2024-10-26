import React from "react";
import RyoturiaModel from "./RyoturiaModel";
import { useInputStore } from "@/store/input";
import { useFrame } from "@react-three/fiber";

type Props = {};

const Ryoturia = (props: Props) => {
  const { input } = useInputStore();

  useFrame(({ camera }) => {
    console.log(camera.position, camera.rotation);
  });

  const inputProps = {
    c: input.C4,
    d: input.D4,
    e: input.E4,
    f: input.F4,
    g: input.G4,
    a: input.A4,
    b: input.B4,
    csharp: input["C#4"],
    dsharp: input["D#4"],
    fsharp: input["F#4"],
    gsharp: input["G#4"],
    asharp: input["A#4"],
  };
  return <RyoturiaModel {...inputProps} />;
};

export default Ryoturia;
