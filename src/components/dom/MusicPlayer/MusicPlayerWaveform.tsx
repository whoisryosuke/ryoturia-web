import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import styled from "styled-components";
import MusicPlayerWaveformBar from "./MusicPlayerWaveformBar";
import { useAppStore } from "@/store/app";
import mapRange from "@/helpers/mapRange";

const MusicPlayerWaveformContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type Props = {};

const SIZE = "800px";
const X_START = 1;
const X_OFFSET = 1.25;
const BAR_LIMIT = 6;

type LineData = {
  y1: number;
  y2: number;
};

const MusicPlayerWaveform = (props: Props) => {
  const [lines, setLines] = useState<LineData[]>([]);
  const interval = useRef(null);

  const updateWaveform = () => {
    // We grab the latest waveform data from the store
    // (you can't use hook data above or it'll be out of date)
    const { waveform } = useAppStore.getState();
    if (!waveform?.current) return;

    // Get the waveform data from ToneJS
    const levels = waveform.current.getValue();

    const newLines = [];
    // We cut the waveform down to only the first quarter
    // because the last 3/4 don't really show much action
    for (let i = 0; i < Math.round(levels.length / BAR_LIMIT); i++) {
      if (i > BAR_LIMIT) break;
      const index = i * 100;
      // Normalizes the waveform data to 0-1 so it's easier to do animations
      // Waveform data goes from -890 to -90+
      // We clip it though to -100 to 50 to make it look better (you can play with it and see for yourself)
      let waveHeightNormalized = mapRange(levels[index], -0.001, 0.001, 0, 1);

      let y1 = mapRange(waveHeightNormalized, 0, 1, 3, 0);
      let y2 = mapRange(waveHeightNormalized, 0, 1, 3, 6);

      newLines.push({
        y1,
        y2,
      });
    }

    setLines(newLines);
    // console.log("updating lines...", newLines);
  };

  useEffect(() => {
    interval.current = setInterval(updateWaveform, 100);

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  const lineElements = lines.map(
    (line, lineIndex) =>
      lineIndex < 5 && (
        <motion.line
          key={lineIndex}
          animate={{
            ...line,
          }}
          x1={X_START + X_OFFSET * lineIndex}
          x2={X_START + X_OFFSET * lineIndex}
          // y1="1"
          // y2="5"
          stroke="url(#myGradient)"
          strokeLinecap="round"
        />
      )
  );

  return (
    <MusicPlayerWaveformContainer>
      <svg
        viewBox="0 0 8 6"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: SIZE, height: SIZE }}
      >
        <defs>
          <linearGradient
            id="myGradient"
            x1="1"
            x2="1"
            y1="1"
            y2="5"
            gradientUnits="userSpaceOnUse"
            // gradientTransform="rotate(90)"
          >
            <stop offset="5%" stopColor="blue" />
            <stop offset="95%" stopColor="purple" />
          </linearGradient>
        </defs>
        {lineElements}
        {/* <motion.line
          animate={{}}
          x1={X_START}
          x2={X_START}
          y1="1"
          y2="5"
          stroke="url(#myGradient)"
          strokeLinecap="round"
        />
        <motion.line
          animate={{}}
          x1={X_START + X_OFFSET * 1}
          x2={X_START + X_OFFSET * 1}
          y1="2"
          y2="4"
          stroke="url(#myGradient)"
          strokeLinecap="round"
        />
        <motion.line
          animate={{}}
          x1={X_START + X_OFFSET * 2}
          x2={X_START + X_OFFSET * 2}
          y1="3.1"
          y2="3.1"
          stroke="url(#myGradient)"
          strokeLinecap="round"
        />
        <motion.line
          animate={{}}
          x1={X_START + X_OFFSET * 3}
          x2={X_START + X_OFFSET * 3}
          y1="3.1"
          y2="3.1"
          stroke="url(#myGradient)"
          strokeLinecap="round"
        />
        <motion.line
          animate={{}}
          x1={X_START + X_OFFSET * 4}
          x2={X_START + X_OFFSET * 4}
          y1="3.1"
          y2="3.1"
          stroke="url(#myGradient)"
          strokeLinecap="round"
        />
        <motion.line
          animate={{}}
          x1={X_START + X_OFFSET * 5}
          x2={X_START + X_OFFSET * 5}
          y1="0"
          y2="6"
          stroke="url(#myGradient)"
          strokeLinecap="round"
        /> */}
      </svg>
    </MusicPlayerWaveformContainer>
  );
};

export default MusicPlayerWaveform;
