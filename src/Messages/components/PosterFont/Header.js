import * as React from "react";
import format from "date-fns/format";

import styles from "./Header.module.css";

export default function({ time, owner }) {
  return (
    <div className={styles.header}>
      {format(time, "hh:mm")} | {format(time, `d–MMM-YYYY`)} | {owner}
    </div>
  );
}
