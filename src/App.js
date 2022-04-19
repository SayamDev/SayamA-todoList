import { useState } from 'react';
import './App.css';

function Todo ({todo}) {
  return (
    <div className='todo'>
      {todo.text}
    </div>
  )
}


//creating to do items
function TodoForm({addTodo}) {
  const [value, setValue] = useState("")
}

//todos = name of my state //setTodos what you are going to use to set the state



function App() {
  const [todos, setTodos] = useState([ 
    {text: "learn more about react"},
    {text: "gucci is life ok"},
    {text: "learn about okay life"},
  ])


  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            />
        ))}
      </div> 
    </div>
  );
}

export default App;
