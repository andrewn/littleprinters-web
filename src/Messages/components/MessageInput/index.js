import * as React from "react";

import styles from "./styles.module.css";

export default function({ className = "", message, onChange, onSend }) {
  function handleChange(evt) {
    onChange(evt.target.value);
  }

  function handleFocus(evt) {
    evt.target.select();
  }

  return (
    <div className={`${styles.MessageInput} ${className}`}>
      <input
        className={styles.input}
        value={message}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button className={styles.send} onClick={onSend}>
        Go
      </button>
    </div>
  );
}
