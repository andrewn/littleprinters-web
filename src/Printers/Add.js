import * as React from "react";

import { Button, HeaderValues } from "../shared";
import { addPrinter } from "../actions";

export default function Add({ dispatch, backTo }) {
  const [printKey, setPrintKey] = React.useState("");
  const canSubmit = printKey !== "";

  function handleSubmit(evt) {
    evt.preventDefault();
    addPrinter(dispatch, printKey);
  }

  return (
    <div>
      <HeaderValues hasBack />
      <h1>Add</h1>

      <form onSubmit={handleSubmit} disabled={!canSubmit}>
        <label>
          <input
            type="text"
            value={printKey}
            onChange={({ target: { value } }) => setPrintKey(value)}
          />
        </label>

        <button type="submit" disabled={!canSubmit}>
          <Button>Add</Button>
        </button>
      </form>
    </div>
  );
}
