import { useState } from "react";


const Title =()=> (
    <div className="sample" key={"heading2"}>
    <a href="/"><img className="logo" src="https://www.pngfind.com/pngs/m/405-4050302_3-red-lion-just-eat-logo-png-transparent.png" alt="Logo" /></a></div>
  );

export default HeaderComponent = ()=>{
  const [view, setView]= useState(true)
  const title = "Just Eat"
    return (
    <div className="header" style={{backgroundColor:"greenyellow"}}>
      <Title/>
      {view && <h1>{title}</h1>}
      <button onClick={()=>setView(!view)}>show / hide</button>
    <div className="nav-items" key={"Nav"}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      
      </div>
    </div>);
  }