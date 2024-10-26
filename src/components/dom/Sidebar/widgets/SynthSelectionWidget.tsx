import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";

type Props = {};

const SynthSelectionWidget = (props: Props) => {
  const { setSynthType } = useAppStore();
  const handleChange = (e) => {
    console.log("camera angle", e.currentTarget.value);
    setSynthType(e.currentTarget.value);
  };
  return (
    <div className={styles.option}>
      <h3 className={styles.sidebar_header}>Synth Type:</h3>
      <select className={styles.dropdown} onChange={handleChange}>
        <option value="piano">Piano</option>
        <option value="poly">Poly</option>
      </select>
    </div>
  );
};

export default SynthSelectionWidget;
