import { imageUrl } from "../../constants"

export default RestaurantCard = ({name,
    cuisines,
    lastMileTravelString,
    cloudinaryImageId} )=>{
   
  return(
    
    <div className="w-[200px] h-72 m-3 p-2 bg-purple-200">
    <img className="w-[100%]" src={imageUrl+cloudinaryImageId} alt="" />
    <h2 class="text-xl font-bold text-violet-900">{name}</h2>
    <h3 class="text-sm text-red-700">{cuisines?.join(", ")}</h3>
    <h4 class="text-lg font-semibold text-green-600"> {lastMileTravelString ? "Near "+lastMileTravelString : null} </h4>
    </div>
    
  
  )
}