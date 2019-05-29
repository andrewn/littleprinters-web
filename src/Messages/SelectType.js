import * as React from "react";

import { HeaderValues } from "../shared";

import Type from "./components/Type";

export default function SelectType({ backTo }) {
  return (
    <div>
      <HeaderValues title="New message" hasBack />

      <ul className="no-list">
        <li>
          <Type type="poster-font" />
        </li>

        <li>
          <Type type="dithergram" disabled />
        </li>

        <li>
          <Type type="quick-draw" disabled />
        </li>
      </ul>
    </div>
  );
}
