import * as React from "react";
import { Link } from "@reach/router";
import { Button } from "../../../shared";

import styles from "./styles.module.css";
import detail from "./key.png";
import printer from "./little-printer-graphic.png";

export default function Printer({ id, name, owner, status }) {
  return (
    <div className={styles.Printer}>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p>Owner: {owner}</p>
        <p>Status: {status}</p>
      </div>

      <div className={styles.detail}>
        <Link className={styles.detailButton} to={id}>
          <img src={detail} alt="Key icon" />
        </Link>
      </div>

      <div className={styles.message}>
        <Button to={`${id}/messages`} type={Button.Types.Primary}>
          Message
        </Button>
      </div>

      <div className={styles.image}>
        <img src={printer} alt="Little Printer" />
      </div>
    </div>
  );
}
