import * as React from "react";
import { Link } from "@reach/router";
import classnames from "classnames";

import * as styles from "./styles.module.css";

export default function Button({
  className,
  to,
  type = Button.Types.Secondary,
  ...props
}) {
  const classes = classnames(styles.Button, styles[type], className);

  return to ? (
    <Link className={classes} to={to} {...props} />
  ) : (
    <span className={classes} {...props} />
  );
}

Button.Types = {
  Primary: "Primary",
  Secondary: "Secondary"
};
