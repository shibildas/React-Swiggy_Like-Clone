import {Component} from "react";
import { Outlet } from "react-router-dom";
import Counter from "../Counter/Counter";
import Profile from "../Profile/Profile";
import ProfileClass from "../ProfileClass/ProfileClass";


// const About = ()=>{
//     return(
//         <>
//         <h1>About Page</h1>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Earum placeat, reprehenderit ducimus exercitationem, 
//             quae facere aspernatur minus vero voluptatum laboriosam, 
//             expedita nisi ipsa facilis! Maiores voluptatem delectus ducimus magni fuga?
//         </p>
//         {/* <Outlet /> */}
//         <Profile name={"Shibil"}/>
//         <ProfileClass name={"Broto"}/>
//         </>
//     )
// }
class About extends Component{
    constructor(props){
        super(props)
        
        console.log("constructor call- parent");
    }
   componentDidMount(){
        console.log("Mounting Component -Parent");
       
    }
    render(){
        console.log("Rendering About");
        return(
            <>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Earum placeat, reprehenderit ducimus exercitationem, 
                quae facere aspernatur minus vero voluptatum laboriosam, 
                expedita nisi ipsa facilis! Maiores voluptatem delectus ducimus magni fuga?
            </p>
            {/* <Outlet /> */}
            {/* <Profile name={"Shibil"}/> */}
            <ProfileClass name={"Broto -first child"}/>

            <Counter/>
            </>
        )

    }
}
export default About;