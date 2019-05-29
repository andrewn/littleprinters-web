import React, { useLayoutEffect } from "react";

import styles from "./Preview.module.css";

export default React.forwardRef(function Preview({ header, text }, ref) {
  useLayoutEffect(function() {
    window.jQuery(ref.current).slabText();
  });

  return (
    <div className={styles.container}>
      {header}
      <div ref={ref} className={`${styles.inner} ${styles.slabText}`}>
        {text}
      </div>
    </div>
  );
});
