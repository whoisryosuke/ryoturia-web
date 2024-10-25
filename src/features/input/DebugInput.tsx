import { useInputStore } from "@/store/input";
import React from "react";

type Props = {};

const DebugInput = (props: Props) => {
  const { input } = useInputStore();

  const inputMap = Object.entries(input);
  const firstOctaveMap = inputMap.filter(([key, pressed]) => key.includes("4"));
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
        color: "#EFEFEF",
        fontFamily: "sans-serif",
      }}
    >
      {inputElements}
    </div>
  );
};

export default DebugInput;
