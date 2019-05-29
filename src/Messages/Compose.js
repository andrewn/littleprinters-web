import * as React from "react";

import { HeaderValues } from "../shared";
import { getPrinterById } from "../reducer";

import PosterFont from "./components/PosterFont";

export default function Compose({ state, printerId, messageType }) {
  const printer = getPrinterById(state, printerId);

  return (
    <div>
      <HeaderValues title={printer.name} />
      <PosterFont onSend={console.log.bind(null, "> ")} />
    </div>
  );
}
