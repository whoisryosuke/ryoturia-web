import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";

type Props = {};

const MuteWidget = (props: Props) => {
  const { mute, setMute } = useAppStore();
  const handleChange = (e) => {
    const muted = e.currentTarget.value == "on" ? true : false;
    setMute(muted);
  };

  return (
    <div className={styles.option}>
      <h3 className={styles.sidebar_header}>Mute Piano:</h3>
      <select
        value={mute ? "on" : "off"}
        className={styles.dropdown}
        onChange={handleChange}
      >
        <option value="on">On</option>
        <option value="off">Off</option>
      </select>
    </div>
  );
};

export default MuteWidget;
