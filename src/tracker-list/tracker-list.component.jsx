import React from "react";
import './tracker-list.style.css'
import Stopwatch from "../stopwatch/stopwatch.component";

const TrackerList = ({trackers}) => {

return(
  <div className="tracker-list">
    {trackers.map((todo, index) => {
      const {text, time} = todo;
      return(
        <div key={index}>
          <span>{index+1}) {text} (<Stopwatch/>)</span>

        </div>
      )
    })}
  </div>
)
}
export default TrackerList;
