import * as React from "react";
import { Header } from "../shared";

export default ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);
export { default as Add } from "./Add";
export { default as Detail } from "./Detail";
export { default as List } from "./List";
