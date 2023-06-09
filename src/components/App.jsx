import React, {useState} from "react";
import ToDoitem from "../ToDoitems";

function App() {
  const [inputText, setInputtext] = useState();
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputtext(newValue)
  }
function addItem(){
  setItems(prevValue =>{
    return [...prevValue, inputText]
  })
   setInputtext("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick = {addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        
         <ul>
         {items.map(todoItem => ( <ToDoitem text={todoItem}/>) )}
          {/* {items.map(todoItem =>{ */}
            {/* return <li>{todoItem}</li> */}
          {/* })} } */}
        
        </ul>
      </div>
    </div>
  );
}

export default App;
