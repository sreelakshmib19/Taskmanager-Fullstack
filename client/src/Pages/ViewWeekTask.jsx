import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

function ViewWeeksTask() {
  const [taskList, setTaskList] = useState();
  const fetchAllTasks = async function () {
    //destruscturing response from the axios request and getting data
    let { data } = await axios.get("http://localhost:5000/api/tasks");
    console.log(data.tasks);
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    // first date of  week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

    // last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
    console.log("dates ", firstDayOfWeek, lastDayOfWeek);

    const weeksTasks = data.tasks.filter((single) => {
      let taskDay = new Date(single.dueDate);
      if (taskDay >= firstDayOfWeek && taskDay <= lastDayOfWeek) {
        console.log(single);
        return single;
      }
    });
    setTaskList(weeksTasks);
  };
  useEffect(() => {
    fetchAllTasks();
  }, []);
  return (
    <div>
      <Navbar weekTasks />
      <div
        className="tasks-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2 style={{ textAlign: "center", fontSize: 25, color: "black" }}>
          Tasks for the Week
        </h2>
        <div className="tasks">
          {taskList &&
            taskList.map((obj) => {
              console.log(obj);
              return <Card data={obj} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ViewWeeksTask;
