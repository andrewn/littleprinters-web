import * as React from "react";
import domtoimage from "dom-to-image";

import Preview from "./Preview";

async function generateImageFromPreview(ref) {
  if (ref.current) {
    console.log(ref.current);
    return await domtoimage.toBlob(ref.current);
  }
}

export default function() {
  const [message, setMessage] = React.useState("This is a message!");
  const [image, setImage] = React.useState();
  const ref = React.createRef();

  const doIt = async function() {
    const image = await generateImageFromPreview(ref);
    setImage(URL.createObjectURL(image));
    // sendImage(image);
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
