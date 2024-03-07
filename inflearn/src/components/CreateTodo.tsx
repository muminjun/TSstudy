import React, {ReactElement, useState, useRef} from 'react'

type Props = {
  onClickCreate: (text: string) => void;
}

function CreateTodo(props: Props) {
  const [text, setText] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickBtn = () => {
    props.onClickCreate(text)
    setText('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
    <div>
      <input
          type="text"
          value={text}
          onChange={onChangeInput}
          ref={inputRef}
        />
      <button onClick={onClickBtn}>추가</button>
    </div>
    </>
  )
}

export default CreateTodo