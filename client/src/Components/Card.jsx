import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
// import Button from "@mui/material/Button";

function Card(props) {
  const deleteTask = async () => {
    const response = await axios.delete(
      "http://localhost:5000/api/tasks/" + props.data.taskID
    );
    window.location.reload();
  };
  const navigate = useNavigate();
  const editTask = () => {
    navigate("/edit-task", { state: props.data });
  };
  const completed = async () => {
    let updatedStatus = { status: "completed" };
    await axios.patch(
      "http://localhost:5000/api/tasks/" + props.data.taskID,
      updatedStatus
    );
    window.location.reload();
  };

  return (
    <div className="body">
      <div className="card">
        <div className="row">
          <div className="column">
            <div>
              <h3 className="head">{props.data.taskName}</h3>
              <button
                className="button"
                // variant="contained"
                // color="success"
                onClick={completed}
              >
                Completed
              </button>

              {/* <button className="button">Compleated</button> */}
            </div>
            <hr />
            <p></p>
            <p>Discription : {props.data.discription}</p>
            <p>Due Date : {props.data.dueDate}</p>
            <p>Difficulty : {props.data.difficulty}</p>
            <p>Status : {props.data.status}</p>
            <p>
              <button onClick={editTask} className="btn">
                Edit
              </button>
            </p>
            <p>
              <button className="btn" onClick={deleteTask}>
                Delete
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
