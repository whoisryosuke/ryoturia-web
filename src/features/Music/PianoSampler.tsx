import BaseSynth from "./BaseSynth";

type Props = {};

const PianoSampler = (props: Props) => {
  console.log("rendering piano");
  return (
    <BaseSynth
      type="Sampler"
      config={{
        urls: {
          C1: "C1.mp3",
          C2: "C2.mp3",
          C3: "C3.mp3",
          C4: "C4.mp3",
          C5: "C5.mp3",
          C6: "C6.mp3",
          C7: "C7.mp3",
        },
        baseUrl: "http://localhost:3000/samples/piano-acoustic/",
      }}
    />
  );
};

export default PianoSampler;
