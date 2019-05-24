import * as React from "react";
import { Link } from "@reach/router";

import { Button, HeaderValues } from "../shared";

export default function List({ state: { printers }, dispatch }) {
  return (
    <div>
      <HeaderValues title="Little Printers" />

      <Button to="add">Add</Button>

      <ul>
        {Object.entries(printers).map(function([id, { name, owner, status }]) {
          return (
            <li key={id}>
              <h2 title={id}>{name}</h2>
              <p>Owner: {owner}</p>
              <p>Status: {status}</p>

              <Button to={id}>Detail</Button>
              <br />
              <br />
              <Button to={`${id}/messages`}>Message</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
