import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";
import Slider from "../../Primitives/Slider";

type Props = {};

const EnvelopeWidget = (props: Props) => {
  const {
    attack,
    decay,
    sustain,
    release,
    setAttack,
    setDecay,
    setSustain,
    setRelease,
  } = useAppStore();
  const handleAttackChange = (value) => {
    setAttack(value);
  };
  const handleDecayChange = (value) => {
    setDecay(value);
  };
  const handleReleaseChange = (value) => {
    setRelease(value);
  };

  return (
    <div className={styles.option}>
      <label htmlFor="attack">
        <h3 className={styles.sidebar_header}>Attack:</h3>
      </label>
      <Slider
        name="attack"
        minValue={0}
        maxValue={1}
        step={0.1}
        value={attack}
        defaultValue={attack}
        onChange={handleAttackChange}
      />
      <label htmlFor="decay">
        <h3 className={styles.sidebar_header}>Decay:</h3>
      </label>
      <Slider
        name="decay"
        minValue={0}
        maxValue={1}
        step={0.1}
        value={decay}
        onChange={handleDecayChange}
      />
      <label htmlFor="release">
        <h3 className={styles.sidebar_header}>Release:</h3>
      </label>
      <Slider
        name="release"
        minValue={0}
        maxValue={1}
        step={0.1}
        value={release}
        onChange={handleReleaseChange}
      />
    </div>
  );
};

export default EnvelopeWidget;
