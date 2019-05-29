import * as React from "react";
import { Link, history } from "@reach/router";

import styles from "./styles.module.css";

const initialContext = { title: "" };

const Context = React.createContext();

export const Consumer = Context.Consumer;

export function HeaderValues(props) {
  return (
    <Consumer>
      {({ setHeader }) => {
        return <HeaderValuesInner {...props} setHeader={setHeader} />;
      }}
    </Consumer>
  );
}

export function HeaderValuesInner({ setHeader, hasBack, title }) {
  React.useEffect(() => {
    setHeader({ hasBack, title });
  }, [hasBack, title]);

  return null;
}

export function HeaderProvider({ children }) {
  const [header, setHeader] = React.useState(initialContext);

  const value = {
    ...header,
    setHeader
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default function Header() {
  return (
    <Context.Consumer>
      {({ title, hasBack }) => {
        return (
          <nav className={styles.Header}>
            {hasBack && (
              <button
                className={`${styles.button} ${styles.left}`}
                onClick={() => window.history.back()}
              >
                ←
              </button>
            )}
            <h1 className={styles.title}>{title}</h1>
          </nav>
        );
      }}
    </Context.Consumer>
  );
}
