// imports
import "./App.css";
import React from "react";
// material-ui
import { Container } from "@material-ui/core";
import Tests from "../Tests/";
// todo react provider
// import { Provider } from "react-redux";
// todo redux store
// import store from "../Store";

function App() {
  return (
      <div className="App">
        <Container maxWidth="md">
          <Tests />
        </Container>
      </div>
  );
}

export default App;
