import PolySynth from "./PolySynth";
import PianoSampler from "./PianoSampler";

const SYNTHS = {
  poly: PolySynth,
  piano: PianoSampler,
};
export type SynthTypes = keyof typeof SYNTHS;
export const SYNTH_TYPES = Object.keys(SYNTHS) as SynthTypes[];
export const SYNTH_NAMES: Record<SynthTypes, string> = {
  poly: "PolySynth",
  piano: "PianoSampler",
};

type Props = {
  type: SynthTypes;
};

const Music = ({ type }: Props) => {
  const SynthComponent = SYNTHS[type];
  return <SynthComponent />;
};

Music.defaultProps = {
  type: "poly",
};

export default Music;
