import React from "react";
import { isRedirect } from "@reach/router";

import useAppReducer from "./reducer";

import { HeaderProvider, Splash } from "./shared";

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
  const [state, dispatch] = useAppReducer();

  if (state.isLoading) {
    return <Splash />;
  }

  return (
    <HeaderProvider>
      <ErrorCatcher>
        <div className="with-background is-stretched">
          <Routes state={state} dispatch={dispatch} />
        </div>
      </ErrorCatcher>
    </HeaderProvider>
  );
}

export default App;
