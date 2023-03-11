import { imageUrl } from "../../constants"

export default RestaurantCard = ({name,
    cuisines,
    lastMileTravelString,
    cloudinaryImageId} )=>{
   
  return(
    <div className="card">
      <img src={imageUrl+cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Near {lastMileTravelString} </h4>
    </div>
  )
}