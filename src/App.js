import react, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  // Arttırma fonksiyonu
  const increase = () => {
    setCount(count + 1)
  }

  // Azaltma fonksiyonu
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div className=" center ">
      <h1 className="text-2xl font-bold ">Counter App</h1>
      <div className="flex m-4 gap-5">
        <button onClick={decrease} className="btn ">
          -
        </button>
        <span className="text-xl font-bold ">{count}</span>
        <button onClick={increase} className="btn ">
          +
        </button>
      </div>
      {count === 3 ? (
        <small className="block  mt-1 underline font-bold">
          Bingo!! You found the lucky number
        </small>
      ) : null}
    </div>
  )
}

export default App
