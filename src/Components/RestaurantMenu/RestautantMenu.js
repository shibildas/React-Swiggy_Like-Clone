import { useParams } from "react-router-dom"
import { imageUrl } from "../../constants"
import useGetMenu from "../../Utils/useGetMenu";

const RestaurantMenu = ()=>{
    const {id} = useParams();
    const menu = useGetMenu(id)
    const list = menu?.cards[0]?.card?.card?.info
    return(
        <div>
            <h1>Restaurant ID: {id}</h1>
            <h2>{list?.name}</h2>
            {list && <img src={imageUrl+list?.cloudinaryImageId} alt="menu image" />}
            <h3>Area: {list?.areaName}</h3>
            <h3>City: {list?.city} </h3>
            <h3>Rating: {list?.avgRatingString} </h3>
        </div>
    )
}
export default RestaurantMenu