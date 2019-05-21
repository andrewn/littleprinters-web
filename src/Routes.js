import * as React from "react";
import { Link, Redirect, Router } from "@reach/router";

import * as Messages from "./Messages";
import * as Printers from "./Printers";

function NotFound() {
  return (
    <div>
      <h1>Something went wrong</h1>
    </div>
  );
}

export default ({ dispatch, state }) => {
  return (
    <Router>
      {/* <Redirect from="/" to="printers" /> */}

      <Printers.default path="printers">
        <Printers.List path="/" state={state} dispatch={dispatch} />
        <Printers.Detail path=":printerId" state={state} dispatch={dispatch} />
        <Printers.Add path="add" state={state} dispatch={dispatch} />

        <Messages.default path=":printerId/messages">
          <Messages.SelectType default />
          <Messages.Compose path=":messageType" />
        </Messages.default>
      </Printers.default>

      <NotFound default />
    </Router>
  );
};
