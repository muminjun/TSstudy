import React from "react";

type Props = {
  handleScore:(value:number) => void
}

const TestProps = ({handleScore}: Props) => {
  return (
    <>
      <button onClick={() => handleScore(1)}>버튼</button>
    </>
  )
}

export default TestProps