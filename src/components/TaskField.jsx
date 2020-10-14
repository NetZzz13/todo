import React, { useRef, useState } from "react";

const TaskField = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const myInput = useRef();

  const addTask = () => {
    text && onAddTask(text);
    setText("");
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    setText(value);
  };

  //при нажатии Enter выполнять addTask()
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTask();
    }
  };

  return (
    <div className="todo__add-field" onClick={addTask}>
      <input
        value={text}
        onChange={handleInputChange}
        type="text"
        placeholder="Enter task..."
        ref={myInput}
        onKeyUp={handleKeyUp}
      />
      <button className="todo__add-field-button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1V15"
            stroke="#C7C7C7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 8H15"
            stroke="#C7C7C7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default TaskField;
