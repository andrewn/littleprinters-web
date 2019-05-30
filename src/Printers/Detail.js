import * as React from "react";

import { Button, HeaderValues } from "../shared";
import { getPrinterById } from "../reducer";

import styles from "./Detail.module.css";

export default function Detail({ state, dispatch, printerId }) {
  const printer = getPrinterById(state, printerId);
  const canShare = navigator.share !== undefined;

  const title = printer.name;
  const text = `Connect to my Little Printer`;
  const url = printer.url;

  async function handleShare() {
    try {
      await navigator.share({
        title,
        text,
        url
      });
    } catch (error) {
      console.error("Error sharing: " + error);
      return;
    }
  }

  const webShare = (
    <Button type={Button.Types.Primary} onClick={handleShare}>
      Share now
    </Button>
  );

  const searchParams = new URLSearchParams({
    subject: title,
    body: `${text} ${url}`
  });

  const emailShare = (
    <Button external type={Button.Types.Primary} to={`mailto:?${searchParams}`}>
      Share now
    </Button>
  );

  return (
    <div className={styles.Detail}>
      <HeaderValues hasBack title={printer.name} />

      <div className={styles.section}>
        <p>Share this key so friends can message this printer!</p>

        <p className={styles.url}>
          <a href={printer.url}>{printer.url}</a>
        </p>

        {canShare ? webShare : emailShare}
      </div>
    </div>
  );
}
