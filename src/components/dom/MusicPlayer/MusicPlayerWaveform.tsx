import React from "react";
import { motion } from "motion/react";
import styled from "styled-components";
import MusicPlayerWaveformBar from "./MusicPlayerWaveformBar";

const MusicPlayerWaveformContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type Props = {};

const SIZE = "100px";
const X_START = 1;
const X_OFFSET = 1.5;

const MusicPlayerWaveform = (props: Props) => {
  return (
    <MusicPlayerWaveformContainer>
      <svg
        viewBox="0 0 6 6"
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
        <motion.line
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
      </svg>
    </MusicPlayerWaveformContainer>
  );
};

export default MusicPlayerWaveform;
