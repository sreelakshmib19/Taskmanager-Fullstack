import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./EditTask.css";

function EditTask() {
  const location = useLocation();

  const [taskName, setTaskName] = useState(location.state.taskName);
  const [discription, setDescription] = useState(location.state.discription);
  const [dueDate, setDueDate] = useState(location.state.dueDate);
  const [difficulty, setDifficulty] = useState(location.state.difficulty);

  useEffect(() => {
    console.log(location.state);
  }, []);
  const navigate = useNavigate();
  const performSubmit = async (e) => {
    e.preventDefault();
    let task = {
      taskName,
      discription,
      dueDate,
      difficulty,
    };
    await axios.patch(
      "http://localhost:5000/api/tasks/" + location.state.taskID,
      task
    );
    navigate("/list-task");
    console.log(task);
  };

  return (
    <div>
      <Navbar />
      <div className="edt-tsk">
        <h1>Edit Task</h1>
        <div className="contents">
          <form className="form" action="">
            <div className="item">
              <input
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
                className="input"
                type="text"
                placeholder="Enter Task Name"
                value={taskName}
              />
            </div>
            <div className="item">
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="textarea"
                placeholder="Enter Task Description"
                value={discription}
              ></textarea>
            </div>
            <div className="item">
              <label>Due Date :</label>
              <input
                onChange={(e) => {
                  setDueDate(e.target.value);
                }}
                className="input-1"
                type="date"
                value={dueDate}
              />
            </div>
            <div className="item">
              <label>Difficulty :</label>
              <div>
                <input
                  onClick={() => {
                    setDifficulty("easy");
                  }}
                  className="radio"
                  type="radio"
                  value="Easy"
                  checked={difficulty == "easy"}
                />
                Easy
              </div>
              <div>
                <input
                  onClick={() => {
                    setDifficulty("medium");
                  }}
                  className="radio"
                  type="radio"
                  value="Medium"
                  checked={difficulty == "medium"}
                />
                Medium
              </div>
              <div>
                <input
                  onClick={() => {
                    setDifficulty("Hard");
                  }}
                  className="radio"
                  type="radio"
                  value="Hard"
                  checked={difficulty == "Hard"}
                />
                Hard
              </div>
            </div>
            <div className="footer">
              <button className="btn" onClick={performSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
