import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./AddTask.css";

function AddTask() {
  const taskNameRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const [difficulty, setDifficulty] = useState();
  const navigate = useNavigate();
  const performSubmit = async (e) => {
    e.preventDefault();
    // console.log(taskNameRef.current.value);
    // console.log(descriptionRef.current.value);
    // console.log(dueDateRef.current.value);

    let task = {
      taskName: taskNameRef.current.value,
      discription: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      difficulty,
    };
    await axios.post("http://localhost:5000/api/tasks", task);
    navigate("/list-task");
    console.log(task);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>AddTask</h1>
      </div>
      <div className="tcard">
        <div className="edt-tsk">
          <div className="contents">
            <form className="form" action="">
              <div className="item">
                <input
                  ref={taskNameRef}
                  className="input"
                  type="text"
                  placeholder="Enter Task Name"
                />
              </div>
              <br />
              <div className="item">
                {/* <h1>Description :</h1> */}
                <textarea
                  ref={descriptionRef}
                  className="textarea"
                  placeholder="Enter Task Description"
                ></textarea>
              </div>
              <br />
              <div className="item">
                <label>Due Date :</label>
                <input ref={dueDateRef} className="input-1" type="date" />
              </div>
              <br />
              <div className="item">
                <label>Difficulty :</label>

                <div>
                  <input
                    className="radio"
                    onClick={() => {
                      setDifficulty("easy");
                    }}
                    type="radio"
                    value="Easy"
                  />
                  Easy
                </div>
                <div>
                  <input
                    className="radio"
                    onClick={() => {
                      setDifficulty("medium");
                    }}
                    type="radio"
                    value="Medium"
                  />
                  Medium
                </div>
                <div>
                  <input
                    className="radio"
                    onClick={() => {
                      setDifficulty("hard");
                    }}
                    type="radio"
                    value="Hard"
                  />
                  Hard
                </div>
              </div>
              <br />
              <div className="footer">
                <button className="btn" onClick={performSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
