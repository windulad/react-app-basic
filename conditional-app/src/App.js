import React, { useEffect, useState }from 'react';
import './App.css';
import Test from './Test';

function App(){
  const[toggle, updatetoggle] = useState(true);
  return(
    <div>
      <button onClick={() => {
        updatetoggle(!toggle);
      }}>
        Toggle
      </button>
      {toggle && <Test/>}
    </div>
  );
}

export default App;