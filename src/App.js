
import { useState } from 'react';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveTodo = (event) => {
    event.preventDefault()
    let todoItem = event.target.todoItem.value

    if (!todolist.includes(todoItem)) {
      let finalTodolist = [...todolist, todoItem]
      // console.log(finalTodolist)
      setTodolist(finalTodolist)
    }
    else {
      alert("Todo item already exist")
    }

  }
  let finalList = todolist.map((value,i)=>{
    return(
    <Todolist todoItem = {value} index = {i} todolist={todolist} setTodolist = {setTodolist}/>
    )
  })

  return (
    <>
      <h1>TODO APP</h1>
      <form onSubmit={saveTodo}>
        <input type='text' name='todoItem'></input> <button>AddTodo</button>
      </form>

    <div className='todoList'>
      <ul>
      {finalList}
        </ul>
        </div>
    </>
  );
}

export default App;


function Todolist({todoItem,index,todolist, setTodolist}){
let[status, setStatus] = useState(false)
let removeItem =()=>{
  let finalList = todolist.filter((v,i)=>i!== index)
  setTodolist(finalList)
}

let checkStatus = ()=>{
  setStatus(!status)
}
  return(
    <li className={(status)? 'completed' : ''} onClick={checkStatus}>{todoItem}<span onClick={removeItem}>&times;</span></li>
  )
}