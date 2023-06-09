import React, {useState} from "react";

function ToDoitem(props){

    const [isDone, setIsDone] = useState(false)

    function handleChange(){
        setIsDone(prevValue =>{
            return !prevValue;
        });

    }
     return(
         <div onClick ={handleChange}>
             <li style={{ textDecoration: isDone ? "line-through" : "none"}}> {props.text}</li>
            
         </div>
    );
   
}

export default ToDoitem;