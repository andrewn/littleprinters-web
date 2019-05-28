import React, { useEffect, useReducer } from "react";
import { isRedirect } from "@reach/router";

import createReducer from "./reducer";
import * as actions from "./actions";

import { Header, HeaderProvider, Splash } from "./shared";

import Preview from "./Preview";
import Routes from "./Routes";

import "./global.css";

class ErrorCatcher extends React.Component {
  componentDidCatch(error) {
    if (isRedirect(error)) {
      throw error;
    } else {
      // do whatever you were going to do
    }
  }

  render() {
    return this.props.children;
  }
}

function App() {
  const [state, dispatch] = createReducer();

  if (state.isLoading) {
    return <Splash />;
  }

  return (
    <HeaderProvider>
      <ErrorCatcher>
        <div className="with-background is-stretched">
          <code style={{ position: "fixed", bottom: 0, right: 0 }}>
            {JSON.stringify(state, null, 2)}
          </code>
          <Header />
          <Routes state={state} dispatch={dispatch} />
        </div>
      </ErrorCatcher>
    </HeaderProvider>
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
