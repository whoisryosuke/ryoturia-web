import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import CameraAngleWidget from "./widgets/CameraAngleWidget";
import SynthSelectionWidget from "./widgets/SynthSelectionWidget";
import MuteWidget from "./widgets/MuteWidget";
import VolumeWidget from "./widgets/VolumeWidget";
import EnvelopeWidget from "./widgets/EnvelopeWidget";
import PitchShiftWidget from "./widgets/PitchShiftWidget";
import ChevronUp from "../icons/ChevronUp";

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`}>
        <div className={styles.header}>
          <h2>Controls</h2>
          <h2>Controls</h2>
        </div>
        <div className={styles.content}>
          <CameraAngleWidget />
          <SynthSelectionWidget />
          <MuteWidget />
          <VolumeWidget />
          <EnvelopeWidget />
          <PitchShiftWidget />
        </div>
      </div>

      <button
        className={styles.toggleButton}
        onClick={handleToggleOpen}
        title="Toggle Sidebar"
      >
        <div
          className={`${styles.toggleButtonIcon} ${
            open && styles.toggleButtonIconOpen
          }`}
        >
          <ChevronUp />
        </div>
      </button>
    </>
  );
};

export default Sidebar;
