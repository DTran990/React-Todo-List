import React from 'react';
import '../css/todoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const TodoForm = (props) => {

  const submitHandler = e =>{
    e.preventDefault();

    props.onSubmit(e.target.AddTodo.value);
    e.target.reset();
  };

  return (
    <form id="todoForm" onSubmit={submitHandler}>
        <input type="text" id="AddTodo" placeholder="Add a Todo" name="AddTodo"/>
        <button type='submit'><FontAwesomeIcon icon={faPlus}/></button>
    </form>
  )
}

export default TodoForm;