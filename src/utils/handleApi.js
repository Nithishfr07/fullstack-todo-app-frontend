import axios from 'axios'


const baseUrl="https://fullstack-todo-app-s8gn.onrender.com"

const getTodoFront=(setTodo)=>
{
    axios.get(`${baseUrl}/gettodo`)
    .then(({data})=>
    {
        console.log(data);
        setTodo(data)
    })
}

const addTodoFront=(text,setText,setTodo)=>
{
    axios.post(`${baseUrl}/createtodo`,{name:text})
    .then((data)=>
    {
        console.log(data);
        setText("")
        getTodoFront(setTodo)
    })
}

const updateTodoFront=(todoId,text,setText,setTodo,setUpdate)=>
{
    axios.put(`${baseUrl}/updatetodo/${todoId}`,{name:text})
    .then((data)=>
    {
        setText("")
        setUpdate(false)
        getTodoFront(setTodo)
    })
}

const deleteTodoFront=(_id,setTodo)=>
{
    axios.delete(`${baseUrl}/deletetodo/${_id}`)
    .then(()=>
    {
        getTodoFront(setTodo)
    })
}
export {getTodoFront,addTodoFront,updateTodoFront,deleteTodoFront}