"use client";
import React from 'react'
import Script from 'next/script'

const about = () => {
  // throw new Error("Error to Test error.js file");

  return (
    <div>
      <div>About Page</div>
      <Script>
        {`alert("Welcome to Next App About Page")`}
      </Script>
    </div>
  )
}

export default about