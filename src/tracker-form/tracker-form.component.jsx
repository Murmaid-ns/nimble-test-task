import React, {useEffect, useState} from "react";
import moment from "moment"
import play_circle_filled from "./play_circle_filled-black-18dp.svg"
import "./tracker-form.style.css"

const TrackerForm = ({addTracker}) => {
  const [value, setValue] = useState("");
  useEffect(() => {

  })
  const handleSubmit = e => {
    e.preventDefault();
    moment().locale('ru')
    let counter = 0
    let time = moment().hour(0).minutes(0).seconds( counter++).format('HH:mm:ss');
    if (!value) {
      const currentDate = moment().format('MMMM Do YYYY');
      return addTracker(currentDate, time);
    }
    addTracker(value, time);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <img onClick={handleSubmit} className='button' src={play_circle_filled}/>
    </form>
  )
}
export default TrackerForm;
