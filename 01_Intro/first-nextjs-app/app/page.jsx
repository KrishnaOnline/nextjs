"use client";

import React, { useState, useEffect } from 'react'

const page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Home Page</p>
      <div className='flex gap-3 items-center'>
        <button onClick={() => setCount(count-1)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
    </div>
  )
}

export default page