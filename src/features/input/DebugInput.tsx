import { useInputStore } from "@/store/input";
import React from "react";

type Props = {};

const DebugInput = (props: Props) => {
  const { input } = useInputStore();

  const inputMap = Object.entries(input);
  const firstOctaveMap = inputMap.filter(([key, pressed]) => key.includes("1"));
  const inputElements = firstOctaveMap.map(([key, pressed]) => (
    <div
      key={key}
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <strong>{key}</strong>: {pressed ? "🔵" : "⚪"}
    </div>
  ));

  return (
    <div
      style={{
        position: "fixed",
        bottom: 32,
        left: 32,
        zIndex: 999,
      }}
    >
      {inputElements}
    </div>
  );
};

export default DebugInput;
