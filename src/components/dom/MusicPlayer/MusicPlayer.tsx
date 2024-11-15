import React from "react";
import styled from "styled-components";
import MusicPlayerWaveform from "./MusicPlayerWaveform";

const MusicPlayerContainer = styled.div`
  display: flex;
  padding: 2em;
  border-radius: 3em;
  background: #050505;
  flex-direction: column;
  color: white;
`;

const SongInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

type Props = {};

const MusicPlayer = (props: Props) => {
  return (
    <MusicPlayerContainer>
      <SongInfoContainer>
        <div style={{ width: 64, height: 64, background: "gray" }} />
        <h3>Song title</h3>
        <h3>Album</h3>
        <MusicPlayerWaveform />
      </SongInfoContainer>
    </MusicPlayerContainer>
  );
};

export default MusicPlayer;
