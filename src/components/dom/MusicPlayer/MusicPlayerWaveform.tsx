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

const MusicPlayerWaveform = (props: Props) => {
  return (
    <MusicPlayerWaveformContainer>
      <MusicPlayerWaveformBar animate={{ scaleY: 0.5 }} />
    </MusicPlayerWaveformContainer>
  );
};

export default MusicPlayerWaveform;
