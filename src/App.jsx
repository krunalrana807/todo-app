import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Todoitem from "./component/Todoitem";
import Counter from "./component/Counter";
import Useeffect from "./component/Useeffect";

function App() {
  return (
    <>
      <div className="container">
        <div className="todo-container">
          <div className="page-counter">
            <Counter />
          </div>
          <div className="main">
            <div className="header">
              <Header />
            </div>
            <div className="item">
              <Todoitem />
            </div>
          </div>
        </div>
        {/* <Useeffect /> */}
      </div>
    </>
  );
}

export default App;
