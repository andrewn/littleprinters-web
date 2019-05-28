import * as React from "react";
import { Link } from "@reach/router";

import { Button, HeaderValues } from "../shared";

import Type from "./components/Type";

export default function SelectType() {
  return (
    <div>
      <HeaderValues title="New message" />
      <ul className="no-list">
        <li>
          <Type type="poster-font" />
        </li>

        <li>
          <Type type="dithergram" />
        </li>

        <li>
          <Type type="quick-draw" />
        </li>
      </ul>
    </div>
  );
}
