import React, { useState } from "react";
import UserCard from "../UserCard/UserCard";
import ButtonGroup from "../ButtonGroup/ButtonsGroup";
import "./TaskManager.css";

export function TaskManager() {
  const [activeTask, setActiveTask] = useState(null);
  const buttonsData = [
    { label: "Red", color: "red" },
    { label: "Blue", color: "blue" },
    { label: "Green", color: "green" },
    { label: "Yellow", color: "yellow" },
    { label: "Purple", color: "#8a2be2" },
  ];

  const renderTaskContent = () => {
    switch (activeTask) {
      case 1:
        return <UserCard />;
      case 2:
        return <ButtonGroup buttons={buttonsData} />;
      case 3:
        return <Task3 />; // тут пока нету
      default:
        return <p>Press the button to open task</p>;
    }
  };

  return (
    <div className="task-container">
      <h2>Choose practice task</h2>
      <div className="task-button-container">
        <button onClick={() => setActiveTask(1)} className="gray-button">
          1 Task
        </button>

        <button onClick={() => setActiveTask(2)} className="gray-button">
          2 Task
        </button>

        <button onClick={() => setActiveTask(3)} className="gray-button">
          3 Task
        </button>
      </div>
      <div className="content-box">{renderTaskContent()}</div>
    </div>
  );
}
