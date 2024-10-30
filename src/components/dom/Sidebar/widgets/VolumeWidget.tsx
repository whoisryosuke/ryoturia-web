import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";

type Props = {};

const VolumeWidget = (props: Props) => {
  const { volume, setVolume } = useAppStore();
  const handleChange = (e) => {
    console.log("changing vol", e.currentTarget.value);
    setVolume(e.currentTarget.value);
  };

  return (
    <div className={styles.option}>
      <h3 className={styles.sidebar_header}>Volume:</h3>
      <input
        type="range"
        min="-48"
        max="1"
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
};

export default VolumeWidget;
