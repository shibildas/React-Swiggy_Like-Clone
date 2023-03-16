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
        <div className="p-5 bg-gradient-to-r from-indigo-500 to-pink-400 mt-4 mb-4 flex justify-center shadow-lg" >
            <input type="text" className="rounded-2xl px-3 focus:bg-indigo-200"
             placeholder="Search" value={searchText} 
             onChange={(e)=>{
             setSearchText(e.target.value)}}/>
            <button className="p-3 bg-black rounded-2xl mx-2 text-white hover:bg-pink-600" onClick={()=>{
             const data = filterData(searchText,restaurants)
             setFilteredResaurants(data)
             
            }}>Search</button>
        </div>
      <div className="flex flex-wrap justify-around bg-gradient-to-r from-indigo-500 to-pink-400" >
          
        {
           
            filteredrestaurants?.map(restaurant=>{
                
                return (restaurant.data.data.id && <Link key={restaurant?.data?.data?.id} to={"/restaurant/"+restaurant.data.data.id}><RestaurantCard {...restaurant.data.data} /></Link> )
           })
            
        }
      
        </div> 
        </>
    )
  }
  export default Body