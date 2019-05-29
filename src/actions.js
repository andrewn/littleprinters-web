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

export async function addPrinter(dispatch, url) {
  console.log("addPrinter", url);
  const id = hash(url);
  const info = {
    url,
    lastUpdatedAt: null
  };

  dispatch({ type: "add", id, info });

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
  // dispatch({ type: "sending", printer });
}
