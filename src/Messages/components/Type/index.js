import * as React from "react";
import { Link } from "@reach/router";
import { Button } from "../../../shared";

import styles from "./styles.module.css";

export default function Printer({ disabled, type }) {
  return (
    <Link
      className={`${styles.Type} ${disabled ? styles.isDisabled : ""}`}
      data-message-type={type}
      to={`${type}`}
    >
      <div className={styles.image} />
      <div className={styles.button}>
        <Button type={Button.Types.Primary}>Use</Button>
      </div>
    </Link>
  );
}
