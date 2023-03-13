import { useEffect, useState } from "react"
import { menuAPI } from "../constants"

const useGetMenu = (id)=>{
    const [menu, setMenu]= useState(null)
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
    return menu;

}
export default useGetMenu