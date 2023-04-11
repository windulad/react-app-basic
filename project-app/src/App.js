import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import "./Components/Counter.css"

function App(){
  return(
    <>
      <div className="main">
        <Header/>
        <Counter/>
      </div>
    </>
  );
}
 
export default App;