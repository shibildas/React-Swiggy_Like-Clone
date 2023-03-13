export function filterData(searchText, restaurants){
    return restaurants.filter((restaurant)=>
        restaurant?.data?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
     )
}

