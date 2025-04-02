import React from "react";
import './App.css'

function App(){
  return(
    <div className="container mt-5 w-50">
        <h3 className="text-center">Todo App Using React</h3>
        <div className="input-group">
          <input className="form-control"  type="text" />
          <button className="btn btn-primary">Add</button>
        </div>
        
        <ul className="list-group mt-4">
          <li className="list-group-item">
            <p>Todo</p>
            <button className="btn btn-primary">❌</button>
          </li>
          <li className="list-group-item">
            <p>Todo</p>
            <button className="btn btn-primary">❌</button>
          </li>        
          </ul>
    </div>
  )
}

export default App