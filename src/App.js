import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Headercomponent from "./Components/Header/Headercomponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import RestaurantMenu from "./Components/RestaurantMenu/RestautantMenu";
import Profile from "./Components/Profile/Profile";
import Shimmer from "./Components/Shimmer/Shimmer.js";

const Instamart = lazy(()=> import ("./Components/Instamart/Instamart"))
const About = lazy(()=> import ("./Components/About/About"))

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
  element:<Suspense><About /></Suspense>,
  children:[{
    path:"profile",
    element:<Profile/>
    }
  ]

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
  },

  {
    path:"/instamart",
    element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
  }
]},
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);

