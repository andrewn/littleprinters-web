import domtoimage from "dom-to-image";

const http = fetch; //(...params) => console.log("HTTP", ...params);

const nord = {
  printKey: "w6lswcvvn7icytjfdn46",
  apiBase: "https://littleprinter.nordprojects.co"
};

const local = {
  printKey: "s9njt909j6fbth8wkudb",
  apiBase: "http://localhost:5000"
};

const config = nord;

function url() {
  return `${config.apiBase}/printkey/${config.printKey}?from=thingy`;
}

function sendHtml(html) {
  http(url(), {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      html
    })
  });
}

function sendImage(image) {
  http(url(), {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "image/png"
    },
    body: image
  });
}

async function generateImageFromPreview(ref) {
  if (ref.current) {
    console.log(ref.current);
    return await domtoimage.toBlob(ref.current);
  }
}

export async function getDeviceStatus(url) {
  const response = await http(url);
  const data = await response.json();
  return data;
}
