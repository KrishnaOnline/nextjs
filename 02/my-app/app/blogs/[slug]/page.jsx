import React from 'react'

const page = ({params}) => {
  return (
    <div>Blog ID: {params.slug}</div>
  )
}

export default page