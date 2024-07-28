import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <h2>This is contact</h2>
      <Image src='/images/2.png' alt='' height="100" width="100"/>
      <div>
        {
          [1,2,3,4]?.map((img) => (
            <Image key={img} alt='profile' src={`/images/${img}.png`} height="100" width="100"/>
          ))
        }
      </div>
    </div>
  )
}
