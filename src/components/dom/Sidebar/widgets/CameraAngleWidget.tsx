import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";

type Props = {};

const CameraAngleWidget = (props: Props) => {
  const { setCameraAngle } = useAppStore();
  const handleChange = (e) => {
    console.log("camera angle", e.currentTarget.value);
    setCameraAngle(e.currentTarget.value);
  };

  return (
    <div className={styles.option}>
      <select className={styles.dropdown} onChange={handleChange}>
        <option value="three_quarter">Three Quarter</option>
        <option value="top">Top</option>
        <option value="front">Front</option>
      </select>
    </div>
  );
};

export default CameraAngleWidget;
