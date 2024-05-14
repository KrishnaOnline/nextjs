import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <div>Blog ID: {params.slug}</div>
      {/* <div>Blog Name: {params.slug}</div> */}
    </div>
  )
}

export default page