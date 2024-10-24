import Keyboard from "@/features/input/Keyboard";
import MidiKeyboard from "@/features/input/MidiKeyboard";
import React, { PropsWithChildren } from "react";

type Props = {};

const AppWrapper = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Keyboard />
      <MidiKeyboard />
      {children}
    </>
  );
};

export default AppWrapper;
