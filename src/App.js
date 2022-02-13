import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </RecoilRoot>
  );
};

export default App;
