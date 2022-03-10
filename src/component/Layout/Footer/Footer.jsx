import { useState,useEffect } from "react";
import classes from "./Footer.module.css";
import Clock from "react-live-clock";

const Footer = () => {
    const [date, setDate] = useState(new Date())

    useEffect(()=> {
        var timer = setInterval(()=> setDate(new Date()), 1000)
        return (function cleanup(){
            clearInterval(timer)
        }
        )
    })
  const dates = new Date(-100000000000);
  const dateAsString = dates.toString();
  const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];
 
  console.log(timezone);
  return (
    <div className={classes.footer}>
      <p className={classes.footerText}>
        Copyright © 2021 All rights reserved. Make with ❤!?
      </p>
      <span className={classes.time}>
          
        <p>{date.toLocaleDateString()} {date.toLocaleTimeString()}  {timezone}</p>
      </span>
    </div>
  );
};

export default Footer;
