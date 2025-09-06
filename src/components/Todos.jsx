// 222222
// import React from 'react';
import Todo from './Todo';
import style from './Todos.module.css'

const Todos = (props) => {  // receive from Home.jsx
  // console.log(props.todos);

  
  return (
    <section className={style.todos}>
      {
        props.todos.map((todo) => <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>) //sent to Todo.jsx
      }
    </section>
  );
};

export default Todos;