import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";

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
  const handleAttackChange = (e) => {
    console.log("changing attack", e.currentTarget.value);
    setAttack(e.currentTarget.value);
  };
  const handleDecayChange = (e) => {
    console.log("changing decay", e.currentTarget.value);
    setDecay(e.currentTarget.value);
  };

  return (
    <div className={styles.option}>
      <h3 className={styles.sidebar_header}>Attack:</h3>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={attack}
        onChange={handleAttackChange}
      />
      <h3 className={styles.sidebar_header}>Decay:</h3>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={decay}
        onChange={handleDecayChange}
      />
    </div>
  );
};

export default EnvelopeWidget;
