import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>Products ID : {params.productID}</h1>
    </div>
  )
}

export default page
