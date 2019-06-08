import * as React from "react";

import { Button, HeaderValues } from "../shared";
import { deletePrinter } from "../actions";
import Printer from "./components/Printer";

import styles from "./List.module.css";

function PrinterList({ dispatch, printers }) {
  return <ul className={`no-list ${styles.Printers}`}>
    {Object.entries(printers).map(function ([id, printer]) {
      return (
        <li key={id}>
          <Printer
            id={id}
            {...printer}
            onDelete={() => deletePrinter(dispatch, id)}
          />
        </li>
      );
    })}
  </ul>
}

export default function List({ state: { printers }, dispatch, }) {
  const hasPrinters = Object.keys(printers).length > 0;

  return (
    <div className={styles.List}>
      <HeaderValues title="Little Printers" />

      {hasPrinters && <PrinterList dispatch={dispatch} printers={printers} />}

      <div className={styles.Add}>
        <Button to="add">Add a printer</Button>
      </div>
    </div>
  );
}
