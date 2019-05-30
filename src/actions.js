import * as api from "./api";

function hash(str) {
  var hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export function sanitisePrintKeyToUrl(maybeUrl = "") {
  const trimmed = maybeUrl.trim();
  const needsProtocol = /^device\.li/.test(trimmed);
  let url = trimmed;

  if (needsProtocol) {
    url = `https://${trimmed}`;
  }

  try {
    new URL(url); // throws if not valid
    return url;
  } catch (err) {
    return null;
  }
}

export async function addPrinter(dispatch, maybeUrl) {
  const url = sanitisePrintKeyToUrl(maybeUrl);

  // TODO: Show error message
  if (url == null) {
    return;
  }

  const id = hash(url);
  const info = {
    url,
    lastUpdatedAt: null
  };

  dispatch({ type: "add", id, info });

  // TODO: Get device info first to check if valid key
  getDeviceInfo(dispatch, id, url);
}

// TODO: Should pass in id and fetch url from state
export async function getDeviceInfo(dispatch, id, url) {
  const printer = await api.getDeviceStatus(url);
  console.log("getDeviceInfo", printer);
  dispatch({ type: "status", id, printer });
}

export async function sendImageToPrinter(dispatch, printer, image) {
  console.log("sendImageToPrinter", printer, image);
  dispatch({ type: "sending", printer, image });
  try {
    await api.sendImage({ image, url: printer.url });
    dispatch({ type: "success", printer, image });
  } catch (err) {
    console.error(err);
    dispatch({ type: "failure", printer, image });
  }
}
