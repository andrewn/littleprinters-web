import * as React from "react";

import { HeaderValues } from "../shared";
import { sendImageToPrinter } from "../actions";
import { getPrinterById } from "../reducer";

import PosterFont from "./components/PosterFont";

export default function Compose({ dispatch, state, printerId, messageType }) {
  const printer = getPrinterById(state, printerId);

  function handleSend(image) {
    sendImageToPrinter(dispatch, printer, image);
  }

  return (
    <div>
      <HeaderValues title={printer.name} hasBack />
      <PosterFont onSend={handleSend} owner={printer.owner} />
    </div>
  );
}
