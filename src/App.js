import React, { useState } from "react";
import domtoimage from "dom-to-image";

import Preview from "./Preview";

const http = fetch; //(...params) => console.log("HTTP", ...params);

const nord = {
  printKey: "w6lswcvvn7icytjfdn46",
  apiBase: "https://littleprinter.nordprojects.co"
};

const local = {
  printKey: "s9njt909j6fbth8wkudb",
  apiBase: "http://localhost:5000"
};

const config = local;

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

function App() {
  const [message, setMessage] = useState("This is a message!");
  const [image, setImage] = useState();
  const ref = React.createRef();

  const doIt = async function() {
    const image = await generateImageFromPreview(ref);
    setImage(URL.createObjectURL(image));
    sendImage(image);
    // sendHtml(message);
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={evt => setMessage(evt.target.value)}
      />
      <Preview ref={ref} text={message} />
      {image && <img src={image} alt="" />}
      <button onClick={doIt}>Go</button>
    </div>
  );
}

export default App;
