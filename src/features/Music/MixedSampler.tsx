import BaseSynth from "./BaseSynth";

type Props = {};

const MixedSampler = (props: Props) => {
  return (
    <BaseSynth
      type="Sampler"
      config={{
        urls: {
          C4: "C4.mp3",
          D4: "D4.mp3",
          E4: "E4.mp3",
          F4: "F4.mp3",
          Db4: "Db4.mp3",
          Eb4: "Eb4.mp3",
          Gb4: "Gb4.mp3",
          G4: "G4.mp3",
          A4: "A4.mp3",
          B4: "B4.mp3",
          C5: "C5.mp3",
          D5: "D5.mp3",
          E5: "E5.mp3",
          F5: "F5.mp3",
          Cb5: "Cb5.mp3",
          Db5: "Db5.mp3",
          Fb5: "Fb5.mp3",
          Gb5: "Gb5.mp3",
          G5: "G5.mp3",
          A5: "A5.mp3",
          B5: "B5.mp3",
        },
        baseUrl: "http://localhost:3000/samples/mixed/",
      }}
    />
  );
};

export default MixedSampler;
