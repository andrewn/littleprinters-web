const http = fetch;
// const http = (...params) => console.log("HTTP", ...params);

// const nord = {
//   printKey: "w6lswcvvn7icytjfdn46",
//   apiBase: "https://littleprinter.nordprojects.co"
// };

// // eslint-disable-next-line no-unused-vars
// const local = {
//   printKey: "s9njt909j6fbth8wkudb",
//   apiBase: "http://localhost:5000"
// };

// const config = nord;

// function url() {
//   return `${config.apiBase}/printkey/${config.printKey}?from=thingy`;
// }

// function sendHtml(html) {
//   http(url(), {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       html
//     })
//   });
// }

export function sendImage({ url, image, sender = null }) {
  const composedURL = sender ? `${url}?from=${sender}` : url;
  return http(composedURL, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "image/png"
    },
    body: image
  });
}

export async function getDeviceStatus(url) {
  const response = await http(url);
  const data = await response.json();
  return data;
}
