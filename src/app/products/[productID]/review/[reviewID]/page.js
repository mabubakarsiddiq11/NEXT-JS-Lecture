import React from 'react'

function page({params}) {
  return (
    <div>
      <h1> Product ID : {params.productID} and Review ID : {params.reviewID}</h1>
    </div>
  )
}

export default page
