import { restaurantAPI } from "../../constants"
import RestaurantCard from "../ResaurantCard/RestaurantCard"
import { useEffect, useState} from "react"
import Shimmer from "../Shimmer/Shimmer"
import { Link } from "react-router-dom"
import { filterData } from "../../Utils/useHelper"
import useOnline from "../../Utils/useOnline"


const Body = ()=>{
    const [restaurants, setResaurants] = useState([])
    const [filteredrestaurants, setFilteredResaurants] = useState([])
    const [searchText, setSearchText]= useState('')
    useEffect(()=>{
        //Should make API calls Here....
     getRestaurants();
    },[])
async function getRestaurants(){
    try {     
        const data = await fetch(restaurantAPI)
        const json = await data.json();
        setResaurants(json?.data?.cards)
        setFilteredResaurants(json?.data?.cards)
    } catch (error) {
        console.error(error);       
    }
}
const offline = useOnline();

if (offline){
    return <h1>Offline, Please Check your internet Connection</h1>
}
   if(!restaurants) return null
   
    return (restaurants?.length ==0)? <Shimmer/>:(
        <>
        <div className="search-container" >
            <input type="text" className="search-input"
             placeholder="Search" value={searchText} 
             onChange={(e)=>{
             setSearchText(e.target.value)}}/>
            <button className="search-button" onClick={()=>{
             const data = filterData(searchText,restaurants)
             setFilteredResaurants(data)
             
            }}>Search</button>
        </div>
      <div className="restaurantlist" >
          
        {
           
            filteredrestaurants?.map(restaurant=>{
                
                return <Link to={"/restaurant/"+restaurant.data.data.id}><RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/></Link> 
           })
            
        }
      
        </div> 
        </>
    )
  }
  export default Body