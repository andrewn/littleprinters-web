import React, { useEffect, useReducer } from "react";

import createReducer from "./reducer";
import * as actions from "./actions";

import Preview from "./Preview";
import Routes from "./Routes";

function App() {
  const [state, dispatch] = createReducer();

  useEffect(function() {
    const printKeys = Object.keys(state.printKeys);
    console.log("Fetching status for printKeys", printKeys);
    printKeys.forEach(key => actions.getDeviceInfo(dispatch, key));
  }, []);

  return (
    <div>
      <code>{JSON.stringify(state, null, 2)}</code>
      <Routes state={state} dispatch={dispatch} />
    </div>
  );

  // const [message, setMessage] = useState("This is a message!");
  // const [image, setImage] = useState();
  // const ref = React.createRef();

  // const doIt = async function() {
  //   const image = await generateImageFromPreview(ref);
  //   setImage(URL.createObjectURL(image));
  //   sendImage(image);
  //   // sendHtml(message);
  // };

  // return (
  //   <div>
  //     <textarea
  //       value={message}
  //       onChange={evt => setMessage(evt.target.value)}
  //     />
  //     <Preview ref={ref} text={message} />
  //     {image && <img src={image} alt="" />}
  //     <button onClick={doIt}>Go</button>
  //   </div>
  // );
}

export default App;
