import React from "react";
import NewTask from "./components/NewTask";

function App() {
  return (
    <div className="font-[Inter]">
      <h1 className="text-[#5E5E5E] text-5xl text-center font-bold">TaskDo</h1>
      <NewTask />
    </div>
  );
}

export default App;