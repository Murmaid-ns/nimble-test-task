import React, {useEffect, useState} from 'react';
import moment from "moment";

const Stopwatch = () => {
    let [count, setCount] = useState(0);

    const displayTime = () => {
        let time = moment().hour(0).minutes(0).seconds(count++).format('HH:mm:ss');
        console.log(time);
        return time;
    }
    setCount = setInterval(displayTime, 1000);
    
    return (
        <div>
            <span>{displayTime()}</span>
            <button>Start</button>
            <button>Stop</button>
        </div>
    )
}
export default Stopwatch;