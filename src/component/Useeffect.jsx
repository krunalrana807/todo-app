import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [num, setNum] = useState()
    console.log(num)

    useEffect(()=>{
        console.log("you learn a UseEffect Hook")
    })

  return (
    <>
     <h1>UseEffect</h1>
     <button onClick={()=>setNum("button clicked")}>Click Me</button>
    </>
  )
}

export default Useeffect


