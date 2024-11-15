import { motion, MotionProps } from "motion/react";
import React from "react";
import styled from "styled-components";

type Props = {};

const WaveformBarContainer = styled.div`
  border-radius: 4px;
  background: blue;
`;

const WaveformBarBase = styled.div`
  width: 10px;
  height: 90px;
`;

const WaveformBarBaseMotion = motion(WaveformBarBase);

const MusicPlayerWaveformBar = (props: Props & MotionProps) => {
  return (
    <WaveformBarContainer>
      <WaveformBarBaseMotion {...props} />
    </WaveformBarContainer>
  );
};

export default MusicPlayerWaveformBar;
