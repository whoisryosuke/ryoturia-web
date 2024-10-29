import { useAppStore } from "@/store/app";
import React, { useMemo, useRef } from "react";
import WaveformBox from "./WaveformBox";
import { GroupProps, useFrame } from "@react-three/fiber";
import mapRange from "@/helpers/mapRange";
import { Color, Mesh, MeshPhysicalMaterial } from "three";
import { lerp } from "three/src/math/MathUtils";

// const WAVE_BASE_COLOR = [0.8, 0.8, 0.8]; // White
const WAVE_BASE_COLOR = [0, 0, 0]; // Black
const PRESSED_EMISSIVE_COLOR = new Color("#4287f5"); // Brand Blue

type Props = GroupProps & {};

const WaveformLine = (props: Props) => {
  const boxRefs = useRef<Mesh[]>([]);

  // We grab the waveform data
  const { fft } = useAppStore();
  const levels = fft.current.getValue();

  // Generate boxes to represent notches on the waveform
  // We only need 1/4 of the boxes (the levels gives us 1024 data points - so we limit it a bit)
  // We also store the ref of each box to use later for animation
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

  // The animation (position, color, glow)
  useFrame((_, delta) => {
    // We grab the latest waveform data from the store
    // (you can't use hook data above or it'll be out of date)
    const { fft } = useAppStore.getState();
    if (!fft?.current || boxRefs.current.length == 0) return;

    // Get the waveform data from ToneJS
    const levels = fft.current.getValue();

    // We cut the waveform down to only the first quarter
    // because the last 3/4 don't really show much action
    for (let i = 0; i < levels.length / 4; i++) {
      // If you wanted to space it out "evenly" you'd multiply this index by 4
      // but because we want the first quarter - this works
      let index = i;

      // Height of the waveform
      const amplitude = 7;

      // Normalizes the waveform data to 0-1 so it's easier to do animations
      // Waveform data goes from -890 to -90+
      // We clip it though to -100 to 50 to make it look better (you can play with it and see for yourself)
      let waveHeightNormalized = mapRange(levels[index], -100, 50, 0, 1);
      // This increases the height (or "amplitude") of the waveform
      let waveHeightAmplified = waveHeightNormalized * amplitude;

      // Update the box position
      boxRefs.current[i].position.y = waveHeightAmplified;

      // Animate the color (black to blue) based on waveform height
      const adjustedWaveHeight = waveHeightNormalized * 10;
      const material = boxRefs.current[i].material as MeshPhysicalMaterial;
      material.color.r = lerp(WAVE_BASE_COLOR[0], 0, adjustedWaveHeight);
      material.color.g = lerp(WAVE_BASE_COLOR[1], 0, adjustedWaveHeight);
      material.color.b = lerp(WAVE_BASE_COLOR[2], 1, adjustedWaveHeight);

      // Change Emission (glow) based on waveform height
      material.emissive = PRESSED_EMISSIVE_COLOR;
      material.emissiveIntensity = lerp(0, 3, adjustedWaveHeight);
    }
  });

  return (
    <group scale={0.2} position={[-5, 0, 0]} {...props}>
      {objects}
    </group>
  );
};

export default WaveformLine;
