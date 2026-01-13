import { useState } from "react";
import "./ToDo.css";
export function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  const deleteTask = (idToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToDelete));
  };

  return (
    <div className="todo-container">
      <h2>ToDo list</h2>
      <div className="todo-input-group">
        <input type="text" value={inputValue} onChange={inputChange} />
        <button onClick={addTask}> add </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button className="li-button" onClick={() => deleteTask(task.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
