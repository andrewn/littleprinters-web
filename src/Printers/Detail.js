import * as React from "react";
import { Link } from "@reach/router";

function getPrinter(state, printerId) {
  return state.printers.find(({ id }) => (id = printerId));
}

export default function Detail({ state, dispatch, printerId }) {
  const printer = getPrinter(state, printerId);

  return (
    <div>
      <h1>Detail</h1>

      <p>{printer.name}</p>
    </div>
  );
}
