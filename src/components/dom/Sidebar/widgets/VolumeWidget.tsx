import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";
import Slider from "../../Primitives/Slider";

type Props = {};

const VolumeWidget = (props: Props) => {
  const { volume, setVolume } = useAppStore();
  const handleChange = (value) => {
    console.log("setting volume", value);
    setVolume(value);
  };

  return (
    <div className={styles.option}>
      <label htmlFor="volume">
        <h3 className={styles.sidebar_header}>Volume:</h3>
      </label>
      <Slider
        name="volume"
        minValue={-48}
        maxValue={20}
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
};

export default VolumeWidget;
