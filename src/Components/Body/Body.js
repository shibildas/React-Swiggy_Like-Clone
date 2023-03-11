import { restaurantlist } from "../../constants"
import RestaurantCard from "../ResaurantCard/RestaurantCard"
import { useEffect, useState } from "react"

function filterData(searchText, restaurants){
    return restaurants.filter((restaurant)=>
        restaurant.data.data.name.includes(searchText)

     )

}

const Body = ()=>{
    const [restaurants, setResaurants] = useState(restaurantlist)
    const [searchText, setSearchText]= useState('')

    useEffect(()=>{
        //Should make API calls Here....
     getRestaurants();
    },[])

async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.1525916&lng=75.8923806&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
    const json = await data.json();
    console.log(json);

}

    console.log("Render");   
    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input"
             placeholder="Search" value={searchText} 
             onChange={(e)=>{
             setSearchText(e.target.value)}}/>
            <button className="search-Btn" onClick={()=>{
             const data = filterData(searchText,restaurantlist)
             setResaurants(data)
            }}>Search</button>
        </div>
      <div className="restaurantlist">
        {
            restaurants.map(restaurant=>{
                return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
            })
            
        }
      
        </div> 
        </>
    )
  }
  export default Body