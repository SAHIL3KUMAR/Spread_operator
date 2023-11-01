import React, { useState } from "react";

function App() {
  const [item, setitem] = useState("");
  const [items, setitems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setitem(newValue);
  }

  function addItem() {
    setitems((prevItem) => {
      return [...prevItem, item];
    });
    setitem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
