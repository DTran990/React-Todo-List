import React, {useState} from 'react';
import '../css/container.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './TodoForm';


const Container = () => {
  const [todos, setTodos] = useState([]);  
  const [list, setList] = useState([]);
  const handleChange = e => {
    setList(todos.filter(val => {
      return val.includes(e.target.value.toLowerCase());
    }))
  }
  const addTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setList(newTodos);
    console.log(list);
  }

  return (
    <div id="container">
        <h1>Todo List</h1>
        <TodoForm onSubmit={addTodo}/>
        <input type="text" placeholder="Search" id="Search" name="Search" onChange={handleChange}/>
        {list && list.map((todo,index) =>{
          return (
            <div id="todo" key={index}>
                <p>{todo}</p>
                <button className='todoBtn'><FontAwesomeIcon icon={faCheck}/></button><br/>
                <button className='todoBtn'><FontAwesomeIcon icon={faPencilAlt}/></button><br/>
                <button className='todoBtn'><FontAwesomeIcon icon={faTrash}/></button><br/>
            </div>
          )
        })}
    </div>
  )
}

export default Container;