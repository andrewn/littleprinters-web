import * as React from "react";
import { Link } from "@reach/router";
import classnames from "classnames";

import * as styles from "./styles.module.css";

export default function Button({
  className,
  to,
  external = false,
  type = Button.Types.Secondary,
  ...props
}) {
  const classes = classnames(styles.Button, styles[type], className);

  if (to && external) {
    return <a className={classes} href={to} {...props} />;
  } else if (to) {
    return <Link className={classes} to={to} {...props} />;
  }

  return <span className={classes} {...props} />;
}

Button.Types = {
  Primary: "Primary",
  Secondary: "Secondary"
};
