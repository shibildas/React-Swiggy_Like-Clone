import React from 'react'

function Shimmer() {
  return (
<div className='grid lg:grid-cols-5 md:grid-cols-3 ' >
  {
    Array(20.).fill("").map((e,index)=>(

      <div key={index} className='w-36 mx-3 bg-gradient-to-tl from-gray-500 to-purple-400'></div>
    ))
  }
   
</div>
  )
}

export default Shimmer