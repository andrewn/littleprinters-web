import * as React from "react";

import { Button, HeaderValues } from "../shared";
import { addPrinter } from "../actions";

import styles from "./Add.module.css";

export default function Add({ dispatch, backTo }) {
  const [printKey, setPrintKey] = React.useState("");
  const canSubmit = printKey !== "";

  function handleSubmit(evt) {
    evt.preventDefault();
    addPrinter(dispatch, printKey);
  }

  return (
    <div className={`${styles.container}`}>
      <HeaderValues title="Add a printer" hasBack />

      <form onSubmit={handleSubmit} disabled={!canSubmit}>
        <label>
          <span>Paste the Printer Key into the box below.</span>
          <input
            type="text"
            value={printKey}
            onChange={({ target: { value } }) => setPrintKey(value)}
            placeholder="e.g. device.li/abc123abc123"
          />
        </label>

        <button type="submit" disabled={!canSubmit}>
          <Button type={Button.Types.Primary}>Add printer</Button>
        </button>
      </form>

      <p className={styles.instructions}>
        <a href="http://littleprinter.nordprojects.co">
          Don't have a Printer Key?
        </a>
      </p>
    </div>
  );
}
