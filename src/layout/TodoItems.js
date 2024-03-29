import React from "react";
import { TodoContext } from "../context/DataProvider";
function TodoItem(props) {
  const { MarkComplete,
    Delete,
  } = React.useContext(TodoContext)

    function TodoStatus(){
      MarkComplete(props.key2, !props.completed)
    }

    
  return (
    <li >
      <span
       className={`material-symbols-outlined  ${props.completed && 'task-completed'} `}
       onClick={TodoStatus}
        
      >done</span>
      <p className={`${props.completed && 'task-completed'}`}>{props.text} </p>
      <span 
      className="material-symbols-outlined delete"
      onClick={()=> Delete(props.key2)}
      >close</span>
    </li>
  );
}


export { TodoItem };
