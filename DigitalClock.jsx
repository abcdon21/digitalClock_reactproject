import React, {useState, useEffect} from "react";

function DigitalClock(){
const [time, setTime] = useState(new Date());//to get latest date and time


useEffect(() => {
    const interval = setInterval(() => {//to set the interval
        setTime(new Date());//to update the time
    }, 1000);//to update the time every second
   
  return () => clearInterval(interval);//to clear the interval
  
  }, []);

  function formatTime(){
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      const meridiem= hours >= 12 ? "PM" : "AM";//to get AM or PM
      hours = hours % 12 ||12;//to convert 24 hours to 12 hours
 
 
 return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;//to return the time in 12 hours format
    }
 function padZero(number){
  return(number<10 ? "0" : "") + number;//to add 0 in front of single digit numbers


 }
 
 
 return(
<div className="clock-container">
    <div className="clock">
        <span>{formatTime()}</span>
        </div>
</div>
);  

}

export default DigitalClock;