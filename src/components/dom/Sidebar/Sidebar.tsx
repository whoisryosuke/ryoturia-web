import React from "react";
import styles from "./Sidebar.module.css";
import CameraAngleWidget from "./widgets/CameraAngleWidget";
import SynthSelectionWidget from "./widgets/SynthSelectionWidget";
import MuteWidget from "./widgets/MuteWidget";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <CameraAngleWidget />
        <SynthSelectionWidget />
        <MuteWidget />
      </div>
    </div>
  );
};

export default Sidebar;
