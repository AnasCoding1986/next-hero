import React from 'react'

export default function page({params}) {
    console.log(params);
    if (params.category.length == 2) 
        return <div>example</div>
    if (params.category.length == 3) 
        return <div>varient</div>
  return (
    <div>
      <h3>This is category details page</h3>
    </div>
  )
}
