import React from 'react'

function Shimmer() {
  return (
<div className='restaurantlist' style={{margin:"30px"}}>
  {
    Array(20.).fill("").map((e,index)=>(

      <div key={index} className='shimmercard'></div>
    ))
  }
   
</div>
  )
}

export default Shimmer