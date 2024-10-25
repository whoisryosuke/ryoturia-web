import React, { useEffect, useState } from "react";
import { Note, useInputStore } from "@/store/input";

const KEY_MAP: Record<KeyboardEvent["key"], Note> = {
  a: "C4",
  s: "D4",
  d: "E4",
  f: "F4",
  g: "G4",
  h: "A4",
  j: "B4",
  w: "C#4",
  e: "D#4",
  r: "F#4",
  t: "G#4",
  y: "A#4",
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
