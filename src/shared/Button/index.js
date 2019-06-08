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
    // Anchor will have content through props.children spread into it
    // eslint-disable-next-line jsx-a11y/anchor-has-content
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
