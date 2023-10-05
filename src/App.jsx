import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const valueSix = dice[5].value
    const sameValue = dice.every(die => die.value === valueSix)
    if(allHeld && sameValue){
      setTenzies(true)
    }
  },[dice])
  
  function generateNewDice(){
    return {
        id: nanoid(),
        value : Math.floor(Math.random()*6) + 1,
        isHeld : false,
    }
  }

  function allNewDice(){
    var arr = []
    for(var i=0 ; i < 10 ; i++){
      arr.push(generateNewDice())
    }
    return arr
  }

  function rollDice(){
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
          die : generateNewDice()
      }))
    }else{
      setTenzies(false)
      setDice(allNewDice)
    }
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld:!die.isHeld} : die
    }))
  }

  const dieElements = dice.map((die) => <Die  key={die.id} 
                                              value={die.value} 
                                              isHeld={die.isHeld}
                                              holdDice={() => holdDice(die.id)} />)

  return (
    <main className="bg bg-purple-200 h-96 max-w-3xl rounded-md p-6 flex flex-col justify-around">
      {tenzies && <Confetti />}
      <h1 className="font-extrabold text-6xl text-center">Tenzies</h1>
      <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls</p>
      <div className="dice-container">
        {dieElements}
      </div>
      <button className="bg-blue-600 h-12 w-24 rounded text-white mx-auto active:shadow-2xl" onClick={rollDice}>{tenzies ? "Reset Game":"Roll Dice"}</button>
    </main>
  )
}