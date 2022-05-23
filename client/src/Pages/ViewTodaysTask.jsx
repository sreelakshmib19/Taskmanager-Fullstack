import React, { useEffect, useState } from "react";
import "./ViewTodaysTask.css";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import axios from "axios";
function ViewTodaystask() {
  const [allTask, setAllTask] = useState();
  const fetchAllTask = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks");
    console.log(response.data);
    const { tasks } = response.data;
    const todays = tasks.filter((single) => {
      let a = new Date(single.dueDate);
      let b = new Date();
      if (
        a.getDate() == b.getDate() &&
        a.getMonth() == b.getMonth() &&
        a.getFullYear() == b.getFullYear()
      ) {
        console.log("hi");
        return single;
      }
    });
    setAllTask(todays);
  };
  useEffect(() => {
    fetchAllTask();
  }, []);
  return (
    <div className="todaytask">
      <Navbar />
      <div className="subclass">
        <h2 className="heading">Todays Task</h2>
        {/* <button className="add-tsk-btn">Add Task</button> */}
      </div>
      {allTask &&
        allTask.map((obj) => {
          return <Card data={obj} />;
        })}
    </div>
  );
}

export default ViewTodaystask;
