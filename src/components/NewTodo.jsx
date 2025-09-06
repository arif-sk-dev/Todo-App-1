import React, { useState } from 'react';
import style from './NewTodo.module.css'

const NewTodo = (props) => { //sent data to parent/Home.jsx
  const [todo, setTodo] = useState({title:"", desc: "" });

  const handleChange =(e)=> {
    const name = e.target.name;
    setTodo((oldTodo)=> {
      return {...oldTodo, [name]:e.target.value}
    });
  }

  const handleSubmit = (e)=> { 
    e.preventDefault();
    props.onAddTodo(todo); // sent data to onAddTodo/Home.jsx
    setTodo({title: "", desc: ""}); //empty field after submitted
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' value={todo.title} onChange={handleChange} />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor='desc'>Description</label>
        <textarea type='text' id='desc' name='desc' value={todo.desc} onChange={handleChange} />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;