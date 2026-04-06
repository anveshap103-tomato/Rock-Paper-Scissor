import React, { useState } from 'react'


function App() {
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("")
  function handleClick(move){
    if (move == "Rock"){
     setUserMove("🪨") 
     setComputerMove(compMove())
    }
    else if (move == "Paper"){
      setUserMove("📑")
      setComputerMove(compMove())

    }
    else if (move == "Scissor"){
      setUserMove("✂️")
      setComputerMove(compMove())

    } 
  }

  function compMove(){
    let val = Math.random()
    if (val < 0.33){
      return "🪨"
    }
    else if (val < 0.66){
      return "📑"
    }
    else{
      return "✂️"
    }
  }

  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      <h2>Computer : You</h2>
      <div>
        <span>{computerMove}</span> : <span>{userMove}</span>
      </div>
      <div>
        <button onClick={() => {handleClick("Rock")}} >🪨</button>
        <button onClick={() => {handleClick("Paper")}} >📑</button>
        <button onClick={() => {handleClick("Scissor")}} >✂️</button>
      </div>

    </div>
  )

}

export default App
