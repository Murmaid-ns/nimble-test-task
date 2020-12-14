import React from "react";
import "./App.css";
import TrackerDashboard from "./tracker-dashboard/tracker-dashboard.component";
import Stopwatch from "./stopwatch/stopwatch.component";

function App() {

  return (
    <div className="app">
        <Stopwatch/>
      <TrackerDashboard/>
    </div>
  );
}

export default App;
