import React from "react";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

function App() {
  return (
    <>
      <div className="font-[Inter] grid grid-cols-3">
        <div>
        </div>
        <div>
          <h1 className="text-[#5E5E5E] text-5xl text-center font-bold">TaskDo</h1>
          <NewTask />
          <Task />
        </div>
      </div>
    </>
  );
}

export default App;