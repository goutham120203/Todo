import React,{useState} from "react";
import './App.css'

function App(){
      let[todoInput,setTodoInput]=useState("Add task")
      let [todoList,setTodoList]=useState([{
        id:1,
        task:'learn React'
      },
      {
        id:2,
        task:'learn Angular'
      }     
      ]);

      let nextId = 3;

      function addNewTodo(){
        if(todoInput==""){
          alert("Add some task");
        }
        else{
          let newTodos =[
            ...todoList,
            {
              id:nextId++,
              task:todoInput
            }
          ]

          setTodoList(newTodos)
          setTodoInput("")
        }
      }

      function deleteTodo(id){
          let updatedTodos=todoList.filter(
            (todo)=>{
              return todo.id!=id
            }
          )
          setTodoList(updatedTodos)

      }

  return(
    <div className="container mt-5 w-50">
        <h3 className="text-center">Todo App Using React</h3>
        <div className="input-group">
          <input className="form-control" onChange={(e)=>{
            let task=e.target.value;
            setTodoInput(task);
          }} type="text" value={todoInput} />
          <button className="btn btn-primary" onClick={()=>{
            addNewTodo()
          }}>Add</button>
        </div>
        <ul className="list-group mt-4">
        {todoList.map((todo)=>{
          return (
            <li className="list-group-item">
              <p>{todo.task}</p>
              <button className="btn btn-primary" onClick={()=>{
                deleteTodo(todo.id)
              }}>❌</button>
            </li>
          )
        })}
        </ul>
    </div>
  )
}

export default App