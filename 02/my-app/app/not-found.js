import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Custom 404 Not Found Page...</h2>
        <p>Could Not Found Requested Resource</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound