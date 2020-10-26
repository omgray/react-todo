import React, { useState,useEffect } from 'react';
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";


function App() {

  // State management
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
    // Run once at start
    useEffect(() => {
      getLocalTodos();
    }, []);
    // Use Effect
    useEffect(() => {
      filterHandler();
      saveLocalTodos();
    }, [todos, status]);
  // functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
        default: 
          setFilterTodos(todos);
        break;
    }
  };
  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <Todos setTodos={setTodos} todos={todos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
