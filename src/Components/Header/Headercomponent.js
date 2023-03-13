import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../Utils/useOnline";

const Title =()=> (
  <div className="sample" key={"heading2"}>
    <Link to="/"><img className="logo" src="https://www.pngfind.com/pngs/m/405-4050302_3-red-lion-just-eat-logo-png-transparent.png" alt="Logo" /></Link>
  </div>
  );
  
  export default HeaderComponent = ()=>{
    const [isLoggedIn, setIsLoggedIn]= useState(true)
    const [view, setView]= useState(true)
    const isOnline= useOnline()
  const title = "Just Eat"
    return (
    <div className="header" style={{backgroundColor:"greenyellow"}}>
      <Title/>
      {view && <h1>{title}</h1>}
      <button onClick={()=>setView(!view)}>show / hide</button>
    <div className="nav-items" key={"Nav"}>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/instamart"><li>Instamart</li></Link>
      </ul>
      
      </div>
      <h1>{isOnline ? `⚫` : `🟢` }</h1>
      {
        isLoggedIn ? (<button onClick={()=> setIsLoggedIn(false)}>Logout</button>)
         : (<button onClick={()=> setIsLoggedIn(true)}> Log In</button>)

      }
    </div>);
  }