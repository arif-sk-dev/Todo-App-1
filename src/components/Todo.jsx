// 333333
import React from 'react';
import { RiDeleteBin6Fill  } from '@remixicon/react'
import style from './Todo.module.css'

const Todo = (props) => { //receive from Todos.jsx
  const {title, desc} = props.todo;
  const {id} = props;

  const handleClick = (id)=> {
    props.onRemoveTodo(id);
  }
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className={style.btn} onClick={()=> {handleClick(id)}}>
          <RiDeleteBin6Fill />
        </button>
      </div>
    </article>
  );
};

export default Todo;