import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const idRef = useRef(1)

  const onClickCreate = (text: string) => {
    setTodos([...todos, {id: idRef.current++, title: text}])
  }

  return (
    <>
      <h1>Todo</h1>
      <CreateTodo onClickCreate={onClickCreate}/>
      <div>
        {todos.map ((todo) => (
          <TodoItem key={todo.id} {...todo}/>
        ))}
      </div>
    </>
  );
}

export default App;
