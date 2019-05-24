import * as React from "react";

import { HeaderValues } from "../shared";
import { getPrinterById } from "../reducer";

export default function Compose({ state, printerId, messageType }) {
  console.log("compose", state, printerId);
  const printer = getPrinterById(state, printerId);
  console.log("printer", printer);

  return (
    <div>
      <HeaderValues title={printer.name} />
    </div>
  );
}
