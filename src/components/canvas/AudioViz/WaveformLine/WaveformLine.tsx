import { useAppStore } from "@/store/app";
import React, { useMemo, useRef } from "react";
import WaveformBox from "./WaveformBox";
import { GroupProps, useFrame } from "@react-three/fiber";
import mapRange from "@/helpers/mapRange";
import { Mesh } from "three";
import { lerp } from "three/src/math/MathUtils";

// const WAVE_BASE_COLOR = [0.8, 0.8, 0.8];
const WAVE_BASE_COLOR = [0, 0, 0];

type Props = GroupProps & {};

const WaveformLine = (props: Props) => {
  const { fft } = useAppStore();
  const levels = fft.current.getValue();
  console.log("waveform", fft, levels, levels.length);
  const boxRefs = useRef<Mesh[]>([]);
  const objects = useMemo(
    () =>
      new Array(levels.length / 4)
        .fill(0)
        .map((_, index) => (
          <WaveformBox
            ref={(el) => (boxRefs.current[index] = el)}
            key={index}
            offset={index}
          />
        )),
    [levels.length]
  );

  console.log("obj", objects);

  useFrame((_, delta) => {
    const { fft } = useAppStore.getState();
    if (!fft?.current || boxRefs.current.length == 0) return;

    const levels = fft.current.getValue();

    for (let i = 0; i < levels.length / 4; i++) {
      let index = i;
      const height = 2;
      const amplitude = 7;
      // -890 to -90
      let waveHeightNormalized = mapRange(levels[index], -100, 50, 0, 1);
      let waveHeightAmplified = waveHeightNormalized * amplitude;
      // let binMapped = mapRange(levels[i], -890, -90, 0, 1);
      // const normalized = Math.max(binMapped, 0);
      // p.vertex(i * 12, binMapped - 500);
      const halfwayDownScreen = height / 2;
      // const sin = Math.sin(i / 5 + delta / 1000) * 5;

      // boxRefs.current[i].position.y = sin + halfwayDownScreen - normalized;
      boxRefs.current[i].position.y = waveHeightAmplified;

      const adjustedWaveHeight = waveHeightNormalized * 10;
      boxRefs.current[i].material.color.r = lerp(
        WAVE_BASE_COLOR[0],
        0,
        adjustedWaveHeight
      );
      boxRefs.current[i].material.color.g = lerp(
        WAVE_BASE_COLOR[1],
        0,
        adjustedWaveHeight
      );
      boxRefs.current[i].material.color.b = lerp(
        WAVE_BASE_COLOR[2],
        1,
        adjustedWaveHeight
      );
    }
  });

  return (
    <group scale={0.2} position={[-5, 0, 0]} {...props}>
      {objects}
    </group>
  );
};

export default WaveformLine;
