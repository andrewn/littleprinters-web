import * as React from "react";
import { Link } from "@reach/router";

import { Button, HeaderValues } from "../shared";

export default function SelectType() {
  return (
    <div>
      <HeaderValues title="New message" />

      <ul>
        <li>
          <Link to="poster-font">
            <h2>Poster font</h2>
            <Button>Use</Button>
          </Link>
        </li>

        <li>
          <Link to="dithergram">
            <h2>#dithergram</h2>
            <Button>Use</Button>
          </Link>
        </li>

        <li>
          <Link to="quick-draw">
            <h2>Quick draw</h2>
            <Button>Use</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
