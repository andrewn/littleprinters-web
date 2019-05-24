import * as React from "react";
import { Link } from "@reach/router";

import { Button, HeaderValues } from "../shared";
import Printer from "./components/Printer";

export default function List({ state: { printers }, dispatch }) {
  return (
    <div>
      <HeaderValues title="Little Printers" />

      <Button to="add">Add</Button>

      <ul className="no-list">
        {Object.entries(printers).map(function([id, printer]) {
          return (
            <li key={id}>
              <Printer id={id} {...printer} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
