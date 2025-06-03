import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import './style.css'
import CounterComponant from "./components/CounterComponant";

const App=()=>{
  return(
<div className="todo-container">
  <CounterComponant/>
  <Header title="Totoie app"/>
  <TodoItem text="Eat"/>
  <TodoItem completed={true} text="Code"/>
  <TodoItem text="Sleep"/>
  <TodoItem text="Play"/>
  <TodoItem text="Study"/>
  <Button/>
</div>
  );
};

export default App;
