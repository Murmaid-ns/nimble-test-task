import React, {useEffect, useState} from 'react';
import moment from "moment";

const Stopwatch = () => {
  let [count, setCount] = useState('');
  const displayTime = () => {
    let time = moment().hour(0).minutes(0).seconds(count++).format('HH:mm:ss');
    console.log('time: ', time);
    setCount(time)
  }
 useEffect(() => {
   setInterval(displayTime, 1000);
  }, [])

  const stop = () => {
    let time = moment().hour(0).minutes(0).seconds(0).format('HH:mm:ss');
    setCount(time)
  }

  return (
    <span>
      {count}
      <button>Start</button>
      <button onClick={stop}>Stop</button>
    </span>

  )
}
export default Stopwatch;
