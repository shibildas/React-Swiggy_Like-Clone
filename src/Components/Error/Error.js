import { Link, useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError()
    console.log(err);
    return(
        <div>
            
            <h1> OOps!!... </h1>
            <h2>Something Went Wrong ,Status: {err.status}
             {err.statusText}</h2>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    )
}
export default Error