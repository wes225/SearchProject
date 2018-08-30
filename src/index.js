import React from "react";
import ReactDOM from "react-dom";

import SearchMenu from "./Components/SearchMenu";

function App() {
  return (
    <div className="App">
   
      <SearchMenu></SearchMenu>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
