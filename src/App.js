import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Headercomponent from "./Components/Header/Headercomponent";


const AppLayout= ()=>{
  return(
    <>
<Headercomponent/>
<Body/>
<Footer/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

