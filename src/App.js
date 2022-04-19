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

  const handleSubmit = e =>{
    e.preventDefault() //stops refreshing 
    if (!value) return
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input 
      type="text"
      className= "input"
      value={value}
      onChange = {e => setValue (e.target.value)}
      />
    </form>
  )
}

//todos = name of my state //setTodos what you are going to use to set the state


//adding in an isCompleted: false value, you will set that to false to begin with and will, when prompted, change that to true.
function App() {
  const [todos, setTodos] = useState([ 
    {
      text: "learn react hoola",
      isCompleted: false
    },
    {
      text: "hello lola whats up",
      isCompleted: false
    },
    {
      text: "gucci is life gucci",
      isCompleted: false
    }

  ])


  //function will be able to grab the existing list of items, add on the new item, and display that new list.
  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }


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
        <TodoForm addTodo={addTodo} />
      </div> 
    </div>
  );
}

export default App;
