import React from "react";
import Wrap from "./Components/Wrap/Wrap";
import "./App.css"
import Loaddata from "./Components/LoadData/Loaddata";

function App(){
  return(
    <div className="wrapbook">
      <h1>Book Information in wrap format</h1>
      <Wrap/>
      <Loaddata/>
    </div>
  )
}


export default App;