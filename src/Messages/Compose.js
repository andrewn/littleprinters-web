import * as React from "react";
import { Redirect } from "@reach/router";

import { HeaderValues } from "../shared";
import { sendImageToPrinter } from "../actions";
import { getPrinterById } from "../reducer";

import PosterFont from "./components/PosterFont";
import Status from "./components/Status";

const State = {
  Compose: 'Compose',
  Send: 'Send',
  Success: 'Success',
  Fail: 'Fail',
  Done: 'Done',
}

export default function Compose({ dispatch, state, printerId, messageType }) {
  const [uiState, setUiState] = React.useState(State.Compose);
  const printer = getPrinterById(state, printerId);

  console.log('uiState', uiState);

  async function handleSend(image) {
    setUiState(State.Send);
    try {
      await sendImageToPrinter(dispatch, printer, image);
      setUiState(State.Success);
    } catch (err) {
      setUiState(State.Fail);
    }

    // delay and then redirect
    setTimeout(() => setUiState(State.Done), 2000)
  }

  let content = null;

  switch (uiState) {
    case State.Send:
    case State.Fail:
    case State.Success:
      content = <Status type={uiState} />;
      break;
    case State.Done:
      content = <Redirect noThrow to="/" />;
      break;
    case State.Compose:
    default:
      content = <PosterFont onSend={handleSend} owner={printer.owner} />;
  }

  return (
    <div>
      <HeaderValues title={printer.name} hasBack />
      {content}
    </div>
  );
}
