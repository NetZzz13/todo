import React, { useState } from "react";
import ListItem from "./components/ListItem";
import TaskField from "./components/TaskField";
import "./scss/app.scss";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Learn React", completed: true },
    { text: "Design of application", completed: false },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((elem, curIndex) =>
        index === curIndex ? { ...elem, completed: !elem.completed } : elem
      )
    );
  };
  const onRemoveTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, curIndex) => index !== curIndex)
    );
  };

  const onAddTask = (text) => {
    /* setTasks((prevTasks) => prevTasks.push(text)); */
    setTasks((prevTasks) => [...prevTasks, { text, completed: false }]);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Список задач</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((elem, index) => (
          <ListItem
            key={`${elem}_${index}`}
            index={index}
            text={elem.text}
            completed={elem.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
