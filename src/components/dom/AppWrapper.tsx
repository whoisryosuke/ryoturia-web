import Keyboard from "@/features/input/Keyboard";
import MidiKeyboard from "@/features/input/MidiKeyboard";
import Gamepad from "@/features/input/Gamepad";
import React, { PropsWithChildren } from "react";

type Props = {};

const AppWrapper = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Keyboard />
      <MidiKeyboard />
      <Gamepad />
      {children}
    </>
  );
};

export default AppWrapper;
