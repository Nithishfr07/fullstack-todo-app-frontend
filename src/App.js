import { useEffect, useState } from "react";
import Todolist from "./components/Todolist";
import { addTodoFront, deleteTodoFront, getTodoFront, updateTodoFront } from "./utils/handleApi";




function App() {

  const [todo,setTodo]=useState([])
  const [text,setText]=useState("")
  const [update,setUpdate]=useState(false)
  const [todoId,setTodoId]=useState("")

  
  useEffect(()=>
  {
    getTodoFront(setTodo)
  },[])

  const updateMode=(_id,text)=>
  {
    setUpdate(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" 
          placeholder="Add Todo..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
          <div className="add" onClick={update ? ()=>updateTodoFront(todoId,text,setText,setTodo,setUpdate):()=>addTodoFront(text,setText,setTodo)}>{update ? "Update" : "Add"}</div>
        </div>
        <div className="list">
          
         {todo.map((item)=><Todolist key={item._id} text={item.name} updateMode={()=>updateMode(item._id,item.name)} deleteTodo={()=>deleteTodoFront(item._id,setTodo)}/>)}

        </div>
      </div>
    </div>
  );
}

export default App;
