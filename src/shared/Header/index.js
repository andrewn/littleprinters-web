import * as React from "react";

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

export function HeaderValuesInner({ setHeader, title }) {
  React.useEffect(() => {
    setHeader({ title });
  }, [title]);

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
            {hasBack && <div className={styles.left}>←</div>}
            <h1 className={styles.title}>{title}</h1>
          </nav>
        );
      }}
    </Context.Consumer>
  );
}
