import React, { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Counter App</h1>
      <div id="counter-value">{counter}</div>
      <button
        id="increment-btn"
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}
