import * as React from "react";
import { Link } from "@reach/router";
import classnames from "classnames";

import * as styles from "./styles.module.css";

export default function Button({ className, to, ...props }) {
  const classes = classnames(styles.Button, className);

  return to ? (
    <Link className={classes} to={to} {...props} />
  ) : (
    <span className={classes} {...props} />
  );
}
