import * as React from 'react'

import printer from "../../../Printers/components/Printer/little-printer-graphic.png";

import styles from './styles.module.css';

const Statuses = {
  Send: {
    text: 'Sending',
    image: require('./sending-hourglass@3x.png'),
    alt: 'Hourglass'
  },
  Success: {
    text: 'Your message was sent',
    image: require('./sending-done-tick@3x.png'),
    alt: 'Green check mark'
  },
  Fail: {
    text: 'Something went wrong',
    image: require('./fail-cross@3x.png'),
    alt: 'Red cross'
  }
}

export default function Status({ type }) {
  return <div className={styles.Status}>
    <img className={styles.icon} src={Statuses[type].image} alt={Statuses[type].alt} />
    <img className={styles.printer} src={printer} alt="Little Printer" />
    {Statuses[type].text}
  </div>
}
