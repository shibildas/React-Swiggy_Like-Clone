import { useState } from "react"

const Profile = (props)=>{
    const [count,setCount]= useState(0)
    console.log("Render Function");
    return(
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>count: {count}</h3>
            <button onClick={()=>setCount(1)}>set</button>
        </div>
    )
}
export default Profile