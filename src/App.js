import { useState } from "react";
import "./App.css";


// using completeTodo in the Todo function,
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
      <button className="btn" onClick = {() => completeTodo (index)}>Done </button>
      <button className="removebtn" onClick = {() => removeTodo (index)}>X</button>
      </div>
    </div>
  );
}

//creating to do items
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //stops refreshing
    if (!value) return;
    addTodo(value);
    setValue("");
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder = {"Type to Create a list and press Enter"}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

//todos = name of my state //setTodos what you are going to use to set the state

//adding in an isCompleted: false value, set that to false to begin with and will, when prompted, change that to true.
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Test",
      isCompleted: false,
    },
  ]);

  //marking items as complete
  //using the spread operator to grab the current list of items. In this function, I will change the isCompleted status to true so that it knows it is complete. It will then update the state and set the state to the newTodos.

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  //function will be able to grab the existing list of items, add on the new item, and display that new list.
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };


  //remove list item
  //grabing that current list, then splicing the chosen index off of the array of items. Once that is removed,  return the new state by setting it with setTodos to be newTodos.
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
      <TodoForm addTodo={addTodo} />

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
