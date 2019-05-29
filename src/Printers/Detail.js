import * as React from "react";

import { HeaderValues } from "../shared";

function getPrinter(state, printerId) {
  return state.printers.find(({ id }) => (id = printerId));
}

export default function Detail({ state, dispatch, printerId }) {
  const printer = getPrinter(state, printerId);

  return (
    <div>
      <HeaderValues hasBack />
      <h1>Detail</h1>

      <p>{printer.name}</p>
    </div>
  );
}
