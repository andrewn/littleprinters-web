import * as React from "react";
import { Link } from "@reach/router";
import { Button } from "../../../shared";

import styles from "./styles.module.css";

export default function Printer({ type }) {
  return (
    <Link
      className={styles.Type}
      data-message-type={type}
      to={`${type}/messages`}
    >
      <div className={styles.image} />
      <div className={styles.button}>
        <Button type={Button.Types.Primary}>Message</Button>
      </div>
    </Link>
  );
}
