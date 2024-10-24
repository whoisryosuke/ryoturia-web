import React from "react";
import RyoturiaModel from "./RyoturiaModel";
import { useInputStore } from "@/store/input";
import { useFrame } from "@react-three/fiber";

type Props = {};

const Ryoturia = (props: Props) => {
  const { input } = useInputStore();

  const inputProps = {
    c: input.C1,
    d: input.D1,
    e: input.E1,
    f: input.F1,
    g: input.G1,
    a: input.A1,
    b: input.B1,
    csharp: input["C#1"],
    dsharp: input["D#1"],
    fsharp: input["F#1"],
    gsharp: input["G#1"],
    asharp: input["A#1"],
  };
  return <RyoturiaModel {...inputProps} />;
};

export default Ryoturia;
