import React, {useState} from "react";
import TestProps from "../components/TestProps";

const Test = () => {
  const [score, setScore] = useState(1)

  const handleScore = (value:number) => {
    setScore(score + value)
  }

  return (
    <>
      <h1>{score}</h1>
      <button onClick={() => handleScore(1)}>버튼</button>
    </>
  )
}

export default Test