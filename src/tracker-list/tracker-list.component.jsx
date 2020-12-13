import React from "react";
import './tracker-list.style.css'

const TrackerList = ({trackers}) => {

return(
  <div className="tracker-list">
    {trackers.map((todo, index) => {
      const {text, time} = todo;
      return(
        <div key={index}>
          <span>{index+1}) {text} ({time})</span>
        </div>
      )
    })}
  </div>
)
}
export default TrackerList;
