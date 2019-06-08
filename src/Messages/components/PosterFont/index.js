import * as React from "react";
import domtoimage from "dom-to-image";

import MessageInput from "../MessageInput";
import Header from "./Header";
import Preview from "./Preview";
import useTime from "./useTime";

async function generateImageFromPreview(ref) {
  if (ref.current) {
    return await domtoimage.toBlob(ref.current);
  }
}

export default function({ onSend, owner }) {
  const [message, setMessage] = React.useState("");
  const ref = React.createRef();

  const render = async function() {
    const image = await generateImageFromPreview(ref);
    onSend(image);
  };

  const time = useTime();

  return (
    <div>
      <Preview
        ref={ref}
        text={message}
        header={<Header time={time} owner={owner} />}
      />
      <div className="is-keyboard-accessory">
        <MessageInput message={message} onChange={setMessage} onSend={render} />
      </div>
    </div>
  );
}
