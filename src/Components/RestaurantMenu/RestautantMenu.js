import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {imageUrl, menuAPI} from "../../constants"

const RestaurantMenu = ()=>{
    const {id} = useParams();
    const [menu , setMenu]= useState(null)
    useEffect(() => {
      
        getRestaurantInfo() 
    }, [])
    async function getRestaurantInfo(){
        try {
            const data = await fetch(menuAPI+id)
            const json = await data.json()
            setMenu(json.data)
        } catch (error) {
           console.log(error); 
        }

    }
    const list = menu?.cards[0]?.card?.card?.info
    
    return(
        <div>
            <h1>Restaurant ID: {id}</h1>
            <h2>{list?.name}</h2>
            <img src={imageUrl+list?.cloudinaryImageId} alt="" />
            <h3>Area: {list?.areaName}</h3>
            <h3>City: {list?.city} </h3>
            <h3>Rating: {list?.avgRatingString} </h3>
        </div>
    )
}
export default RestaurantMenu