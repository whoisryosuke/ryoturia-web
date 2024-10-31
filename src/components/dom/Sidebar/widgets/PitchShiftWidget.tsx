import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";

type Props = {};

const PitchShiftWidget = (props: Props) => {
  const { pitchShift, setPitchShift } = useAppStore();
  const handleChange = (e) => {
    setPitchShift(e.currentTarget.value);
  };

  return (
    <div className={styles.option}>
      <h3 className={styles.sidebar_header}>Pitch Shift:</h3>
      <input
        type="range"
        min="0"
        max="20"
        step="1"
        value={pitchShift}
        onChange={handleChange}
      />
    </div>
  );
};

export default PitchShiftWidget;
