import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTodaysTask from "./Pages/ViewTodaysTask";
import ViewWeekTask from "./Pages/ViewWeekTask";
import EditTask from "./Pages/EditTask";
import ListTask from "./Pages/ListTask";
import AddTask from "./Pages/AddTask";
// import card from "./Components/Card";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewTodaysTask />} />
        <Route path="/week-task" element={<ViewWeekTask />} />
        <Route path="/edit-task" element={<EditTask />} />
        <Route path="/list-task" element={<ListTask />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
