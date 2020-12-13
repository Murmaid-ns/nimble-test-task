import React, {useState} from "react";
import TrackerForm from "../tracker-form/tracker-form.component";
import "./tracker-dashboard.style.css";
import TrackerList from "../tracker-list/tracker-list.component";

const TrackerDashboard = () => {
  const [trackers, setTracker] = useState([]);
  const addTracker = (text, time) => {
    const newTodos = [...trackers, {text , time}];
    setTracker(newTodos);
  };
  console.log(trackers);
 return (
   <div className='tracker-dashboard'>
     <h1>Tracker</h1>
     <TrackerForm addTracker={addTracker}/>
     <TrackerList trackers={trackers}/>
   </div>
 )
}
export default TrackerDashboard;
