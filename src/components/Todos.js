import React from 'react';
import Todo from './Todo';

const Todos = ({todos, setTodos, filterTodos}) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map(todo => (
          <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;