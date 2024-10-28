import { useAppStore } from "@/store/app";
import React from "react";
import styles from "./SharedWidgetStyles.module.css";

type Props = {};

const CameraAngleWidget = (props: Props) => {
  const { cameraAngle, setCameraAngle } = useAppStore();
  const handleChange = (e) => {
    console.log("camera angle", e.currentTarget.value);
    setCameraAngle(e.currentTarget.value);
  };

  return (
    <div className={styles.option}>
      <h3 className={styles.sidebar_header}>Camera Angle:</h3>
      <select
        value={cameraAngle}
        className={styles.dropdown}
        onChange={handleChange}
      >
        <option value="three_quarter">Three Quarter</option>
        <option value="top">Top</option>
        <option value="front">Front</option>
      </select>
    </div>
  );
};

export default CameraAngleWidget;
