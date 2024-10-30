import BaseSynth from "./BaseSynth";

type Props = {};

const MixedSampler = (props: Props) => {
  return (
    <BaseSynth
      type="Sampler"
      config={{
        urls: {
          C4: "C4.mp3",
          C5: "C5.mp3",
        },
        baseUrl: "http://localhost:3000/samples/mixed/",
      }}
    />
  );
};

export default MixedSampler;
