import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
