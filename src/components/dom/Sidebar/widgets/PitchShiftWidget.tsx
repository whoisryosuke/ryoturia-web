import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";
import Slider from "../../Primitives/Slider";

type Props = {};

const PitchShiftWidget = (props: Props) => {
  const { pitchShift, setPitchShift } = useAppStore();
  const handleChange = (value) => {
    setPitchShift(value);
  };

  return (
    <div className={styles.option}>
      <label htmlFor="pitch">
        <h3 className={styles.sidebar_header}>Pitch Shift:</h3>
      </label>
      <Slider
        name="pitch"
        minValue={0}
        maxValue={20}
        step={1}
        value={pitchShift}
        onChange={handleChange}
      />
    </div>
  );
};

export default PitchShiftWidget;
