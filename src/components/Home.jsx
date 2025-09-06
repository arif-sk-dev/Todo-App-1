// 11111111
import React, { useState } from 'react';
import Todos from './Todos';
import style from './Home.module.css'
import NewTodo from './NewTodo';
import {v4 as uuidv4} from "uuid"

// const dummyTodos = [
//   {
//     id: 1,
//     title: "todo title-1",
//     desc: "todo-1 description is here...."
//   },
//   {
//     id: 2,
//     title: "todo title-2",
//     desc: "todo-1 description is here....",
//   }
// ];

const Home = () => {
  const [todos, setTodos] =useState([]); //peak data [...] from NewTodo.jsx Or,child to parent

  const handleAddTodo = (todo)=> { //pass data from child to parent
    // console.log(todo);
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo}]
    });
  };

  const handleRemoveTodo = (id)=>{
    
    // setTodos(filterTodos);
    setTodos((prevTodos) => {
      const filterTodos = todos.filter((todo) => todo.id !== id);
      return filterTodos;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{color: 'white'}}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;