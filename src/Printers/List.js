import * as React from "react";

import { Button, HeaderValues } from "../shared";
import { deletePrinter } from "../actions";
import Printer from "./components/Printer";

import styles from "./List.module.css";

export default function List({ state: { printers }, dispatch, }) {
  return (
    <div className={styles.List}>
      <HeaderValues title="Little Printers" />

      <ul className={`no-list`}>
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

      <div className={styles.Add}>
        <Button to="add">Add a printer</Button>
      </div>
    </div>
  );
}
