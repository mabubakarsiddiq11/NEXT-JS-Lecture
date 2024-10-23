import React from 'react'
import { notFound } from 'next/navigation'

function page({params}) {
  return (
    <div>
      {
        params.reviewID  > 1000 ? notFound() : <h1> Product ID : {params.productID} and Review ID : {params.reviewID}</h1>
      }

  
      
    </div>
  )
}

export default page
