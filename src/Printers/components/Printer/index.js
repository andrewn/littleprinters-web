import * as React from "react";
import { Link } from "@reach/router";

import { Button } from "../../../shared";

import useContainerPress from "./useContainerPress";
import useLongPress from "./useLongPress";
import styles from "./styles.module.css";
import detail from "./key.png";
import printer from "./little-printer-graphic.png";

export default function Printer({ id, name, owner, status, onDelete }) {
  const [showDelete, setShowDelete] = React.useState(false);
  const ref = React.createRef();

  function onLongPress() {
    setShowDelete(true);
  }

  function onContainerPress() {
    setShowDelete(false);
  }

  useContainerPress({ enabled: showDelete, onContainerPress, elementRef: ref });
  const bind = useLongPress({ onLongPress });

  return (
    <div
      className={`${styles.Printer} ${showDelete ? styles.showDelete : ""}`}
      {...bind()}
      ref={ref}
    >
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

      <div className={styles.delete}>
        <button onClick={onDelete}>
          <span className="is-visually-hidden">Remove printer</span>
        </button>
      </div>
    </div>
  );
}
