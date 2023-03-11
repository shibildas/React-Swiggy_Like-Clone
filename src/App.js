import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Headercomponent from "./Components/Header/Headercomponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import RestaurantMenu from "./Components/RestaurantMenu/RestautantMenu";



const AppLayout= ()=>{
  return(
    <>
<Headercomponent/>

<Outlet key="outlet"/>

<Footer/>
    </>
  )
}


const appRouter = createBrowserRouter([
  {
path:"/",
element:<AppLayout/>,
errorElement:<Error/>,
children:[ 
  {
  path:"/about",
  element:<About />

  },
  {
    path:"/contact",
    element:<Contact />
    
  },
  {
    path:"/cart",
    element:<Cart />
    
  },
  {
  path:"/",
  element:<Body/>
        
  },
  {
    path:"restaurant/:id",
    element:<RestaurantMenu/>
  }
]},
 ,
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);

