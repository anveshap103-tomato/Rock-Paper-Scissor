import React, { useState } from 'react'


function App() {
  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("")
  const [userCount, setUserCount] = useState(0)
  const [compCount, setCompCount] = useState(0)
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



  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      <h2>Computer : You</h2>
      <div>
        <span>{computerMove}</span> : <span>{userMove}</span>
      </div>
      <div>
        <span>{compCount}</span> : <span>{userCount}</span>
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
