import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const main = {
  background: "cyan",
  height: "100vh",
  width: "100%", 
};

const firstvariable = "Expert";
const secondvariable = "Developer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div style={main}>
      <h1>Hey, What's up!</h1>
      <h1>{`We are ${firstvariable} ${secondvariable}`}</h1>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
