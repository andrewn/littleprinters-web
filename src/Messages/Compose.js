import * as React from "react";
import { Link } from "@reach/router";

export default function Compose({ messageType }) {
  return (
    <div>
      <h1>Compose a new {messageType}</h1>
    </div>
  );
}
