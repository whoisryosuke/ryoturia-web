import React, { useEffect, useState } from "react";
import { Note, useInputStore } from "@/store/input";

const KEY_MAP: Record<KeyboardEvent["key"], Note> = {
  a: "C1",
  s: "D1",
  d: "E1",
  f: "F1",
  g: "G1",
  h: "A1",
  j: "B1",
  w: "C#1",
  e: "D#1",
  r: "F#1",
  t: "G#1",
  y: "A#1",
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
