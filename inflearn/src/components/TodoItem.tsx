import React from 'react'
import { Todo } from '../types'

interface Props extends Todo {}

function TodoItem(props: Props) {
  return (
    <>
      <div>
        {props.id}번 : {props.title}
      </div>
    </>
  )
}

export default TodoItem