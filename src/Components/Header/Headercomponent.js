import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../Utils/useOnline";
import { logo } from "../assets/assets";

const Title =()=> (
  <div className="md:flex ">
    <Link to="/"><img className="h-20 p-2 m-4" src={logo} alt="Logo" /></Link>
  </div>
  );
  
  export default HeaderComponent = ()=>{
    const [isLoggedIn, setIsLoggedIn]= useState(true)
    const isOnline= useOnline()

    return (
    <div className="lg:flex justify-between bg-gradient-to-r from-indigo-500 to-pink-400 shadow-xl mt-0">
      <Title/>
    <div className="py-10">
      <ul class="text-xl font-bold flex space-x-3 lg:justify-between ">
        <Link to="/">
          <li className="p-2 first-letter:font-extrabold hover:bg-pink-600 hover:text-white">
          Home</li></Link>
        <Link to="/about">
          <li className="p-2 first-letter:font-extrabold hover:bg-pink-600 hover:text-white">About</li>
        </Link>
        <Link to="/contact"><li className="p-2 first-letter:font-extrabold hover:bg-pink-600 hover:text-white ">Contact</li></Link>
        <Link to="/cart"><li className="p-2 first-letter:font-extrabold hover:bg-pink-600 hover:text-white">Cart</li></Link>
        <Link to="/instamart"><li className="p-2 first-letter:font-extrabold hover:bg-pink-600 hover:text-white" >Instamart</li></Link>
      </ul>
      
      </div>

      <h1>{isOnline ? `⚫` : `😌` }</h1>
      <div className="flex py-10 space-x-3 mr-3">
      
         <button className="p-2 w-20 first-letter:font-extrabold hover:bg-indigo-500 hover:text-white" onClick={()=> setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" :"Login"}</button>
        
        
      
      </div>
    </div>);
  }