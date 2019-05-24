import * as React from "react";

import styles from "./styles.module.css";

import splash from "./splash.png";

export default function Splash() {
  return (
    <section className={styles.Splash}>
      <img className={styles.image} src={splash} alt="Little Printer" />
      <h1 className={styles.title}>Little Printers</h1>
    </section>
  );
}
