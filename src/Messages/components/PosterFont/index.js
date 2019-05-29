import * as React from "react";
import domtoimage from "dom-to-image";

import { Button } from "../../../shared";
import MessageInput from "../MessageInput";
import Preview from "./Preview";

async function generateImageFromPreview(ref) {
  if (ref.current) {
    return await domtoimage.toBlob(ref.current);
  }
}

export default function({ onSend }) {
  const [message, setMessage] = React.useState("This is a message!");
  const [image, setImage] = React.useState();
  const ref = React.createRef();

  const render = async function() {
    const image = await generateImageFromPreview(ref);
    setImage(URL.createObjectURL(image));
    onSend(image);
  };

  return (
    <div>
      <Preview ref={ref} text={message} />
      {image && <img src={image} alt="" />}
      <div className="is-keyboard-accessory">
        <MessageInput message={message} onChange={setMessage} onSend={render} />
      </div>
    </div>
  );
}
