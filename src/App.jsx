import React, { useState } from 'react'


function App() {
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("")
  const [userCount, setUserCount] = useState(0)
  const [compCount, setCompCount] = useState(0)
  const [gameCount, setGameCount] = useState(0)

  function handleClick(move){
    let user;
    if (move === "Rock") user = "🪨"
    else if (move === "Paper") user = "📑"
    else user = "✂️"

    let comp = compMove()

    setUserMove(user)
    setComputerMove(comp)

    if (user === comp){
      return
    }
    else if (
      (user === "🪨" && comp === "✂️") ||
      (user === "📑" && comp === "🪨") ||
      (user === "✂️" && comp === "📑")
    ){
      setUserCount(userCount+1)
    }
    else{
      setCompCount(compCount+1)
    }
    setGameCount(gameCount+1)
  }

  function compMove(){
    let val = Math.random()
    if (val < 0.33){
      return "✂️"
    }
    else if (val < 0.66){
      return "🪨"
    }
    else{
      return "📑"
    }
  }

  function reset(){
    setUserMove("")
    setComputerMove("")
    setUserCount(0)
    setCompCount(0)
    setGameCount(0)
  }


  return (
    <div className='game' >
      <h1>Rock-Paper-Scissors</h1>
      <h2>Computer : You</h2>
      <div className='moves' >
        <span>{computerMove || "?"}</span> : <span>{userMove || "?"}</span>
      </div>
      <div className='counts' >
        <span>{compCount}</span> : <span>{userCount}</span>
      </div>
      <div className='btns' >
        <button onClick={() => {handleClick("Rock")}} >🪨</button>
        <button onClick={() => {handleClick("Paper")}} >📑</button>
        <button onClick={() => {handleClick("Scissor")}} >✂️</button>
      </div>
      <button className='reset-btn' onClick={reset} >Reset</button>
      <h4>Game Count : {gameCount}</h4>

    </div>
  )

}

export default App
