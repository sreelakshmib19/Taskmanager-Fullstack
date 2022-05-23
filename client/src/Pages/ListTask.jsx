import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "./ListTask.css";
import Navbar from "../Components/Navbar";
import axios from "axios";
function ListTask() {
  const [allTask, setAllTask] = useState();
  const fetchAllTask = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks");
    console.log(response.data);
    setAllTask(response.data.tasks);
  };
  useEffect(() => {
    fetchAllTask();
  }, []);

  return (
    <div className="list-task">
      <Navbar />

      <div className="head-listtsk">
        <h2 className="heading">All Task</h2>
        {/* <button className="btn-list">Add Task</button> */}
        {allTask &&
          allTask.map((obj) => {
            return <Card data={obj} />;
          })}
      </div>
    </div>
  );
}

export default ListTask;
