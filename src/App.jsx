import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  function allNewDice(){
    var arr = []
    for(var i=0 ; i < 10 ; i++){
      arr.push(Math.floor(Math.random()*6) + 1)
    }
    return arr
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const [dice, setDice] = useState(allNewDice());

  const dieElements = dice.map((die) => <Die value={die}/>)

  return (
    <main className="bg bg-purple-200 h-96 max-w-3xl rounded-md p-6 flex flex-col justify-around">
      <div className="dice-container">
        {dieElements}
      </div>
      <button className="bg-blue-600 h-12 w-24 rounded text-white mx-auto active:shadow-2xl" onClick={rollDice}>Roll Dice</button>
    </main>
  )
}