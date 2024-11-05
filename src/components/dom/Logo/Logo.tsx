import React from "react";
import styles from "./Logo.module.css";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Ryoturia</h1>
      <h2 className={styles.subheader}>Keymaster 12 essentials</h2>
    </div>
  );
};

export default Logo;
