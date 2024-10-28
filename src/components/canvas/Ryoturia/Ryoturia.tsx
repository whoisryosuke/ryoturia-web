import React from "react";
import RyoturiaModel from "./RyoturiaModel";
import { useInputStore } from "@/store/input";
import { useFrame } from "@react-three/fiber";

type Props = {};

const Ryoturia = (props: Props) => {
  const { input, setInput } = useInputStore();

  const inputProps = {
    piano: {
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
    },
    drumpad: {
      c: input.C5,
      d: input.D5,
      e: input.E5,
      f: input.F5,
      g: input.G5,
      a: input.A5,
      b: input.B5,
      csharp: input["C#5"],
      dsharp: input["D#5"],
      fsharp: input["F#5"],
      gsharp: input["G#5"],
      asharp: input["A#5"],
    },
  };
  return <RyoturiaModel {...inputProps} setInput={setInput} />;
};

export default Ryoturia;
