import React from 'react'

const Random = ({params}) => {
  console.log(params);
  console.log(params.vals);

  return (
    <div>
        {
            params?.vals.map(p => <div>{p}</div>)
        }
    </div>
  )
}

export default Random