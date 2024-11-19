import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      console.log(data);
      setTodos(data); // Corrected this line
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div>
      <p>Hello</p>
      {todos.map((todo) => (
        <div key={todo.id}> {/* Added key prop for list items */}
          <h1>{todo.title}</h1> {/* Render todo title correctly */}
          <p>{todo.id}</p> {/* Render todo id correctly */}
        </div>
      ))}
    </div>
  );
};

export default App;
