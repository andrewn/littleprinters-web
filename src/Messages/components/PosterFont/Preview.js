import React, { useLayoutEffect } from "react";

import styles from "./Preview.module.css";

export default React.forwardRef(function Preview({ text }, ref) {
  useLayoutEffect(function() {
    window.jQuery(ref.current).slabText();
  });

  return (
    <div ref={ref} className={styles.container}>
      {text}
    </div>
  );
});
