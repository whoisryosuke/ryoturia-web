import React from "react";
import styles from "./Logo.module.css";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>RyoMIDI</h1>
      <h2 className={styles.subheader}>Digipro 12 Mini</h2>
    </div>
  );
};

export default Logo;
