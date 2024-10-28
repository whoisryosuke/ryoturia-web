import React, { useEffect, useState } from "react";
import { Note, useInputStore } from "@/store/input";

const KEY_MAP: Record<KeyboardEvent["key"], Note> = {
  // 4th octave - bottom row of keyboard
  z: "C4",
  x: "D4",
  c: "E4",
  v: "F4",
  b: "G4",
  n: "A4",
  m: "B4",
  s: "C#4",
  d: "D#4",
  g: "F#4",
  h: "G#4",
  j: "A#4",

  // 5th octave - top row of keyboard
  q: "C5",
  w: "D5",
  e: "E5",
  r: "F5",
  t: "G5",
  y: "A5",
  u: "B5",
  2: "C#5",
  3: "D#5",
  5: "F#5",
  6: "G#5",
  7: "A#5",
};

type Props = {};

const Keyboard = (props: Props) => {
  const { input, setInput } = useInputStore();
  const keys = Object.keys(KEY_MAP);

  // If pressed key is our target key then set to true
  function downHandler({ key }: KeyboardEvent): void {
    if (keys.includes(key)) {
      const noteKey = KEY_MAP[key];
      if (!input[noteKey]) setInput(noteKey, true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }: KeyboardEvent): void => {
    if (keys.includes(key)) {
      const noteKey = KEY_MAP[key];
      setInput(noteKey, false);
    }
  };

  // Add event listeners for keypress
  useEffect(() => {
    if (typeof window == "undefined") return;

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return <></>;
};

export default Keyboard;
