import * as React from "react";

import { Button, HeaderValues } from "../shared";
import { addPrinter } from "../actions";

import useQueryStringParam from "./useQueryStringParam";
import styles from "./Add.module.css";

export default function Add({ dispatch, navigate }) {
  const urlProvidedKey = useQueryStringParam('key');
  const [printKey, setPrintKey] = React.useState(urlProvidedKey || '');
  const canSubmit = printKey !== "";

  async function handleSubmit(evt) {
    evt.preventDefault();
    await addPrinter(dispatch, printKey);
    navigate('..');
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
