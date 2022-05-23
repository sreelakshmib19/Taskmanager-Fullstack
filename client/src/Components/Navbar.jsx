import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nave">
      <div className="topnav">
        <h4 className="nav-head"> TASK MANAGER</h4>
        <div className="list-nav">
          <Link className="Add-New-Task" to="/add-task">
            Add New Task
          </Link>
          <Link className="Add-Task" to="/">
            Todays Task
          </Link>
          <Link className="weektask" to="/week-task">
            Task of the Week
          </Link>
          <Link className="Alltask" to="/list-task">
            All Task
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
