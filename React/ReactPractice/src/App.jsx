import { useState, useTransition, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";
import ButtonGroup from "./components/ButtonGroup/ButtonsGroup";
import { Wrapper } from "./components/Wrapper";
import { TaskManager } from "./components/TaskManager/TaskManager";
import { Counter } from "./components/Counter/Counter";
import { ToggleText } from "./components/ToggleText/ToggleText";
import { TodoList } from "./components/ToDo/ToDo";
import { NotesApp } from "./components/NotesApp/NotesApp";

function App() {
  return (
    <>
      <h1 className="read-the-docs">Hello React!</h1>
      <TaskManager />
      <Counter />
      <ToggleText />
      <TodoList />
      <NotesApp />
    </>
  );
}

export default App;
