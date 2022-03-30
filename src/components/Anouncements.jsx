import React, { useEffect, useState } from "react";
import "./Anouncements.css";

const Anouncements = () => {
  const [timer, setTimer] = useState({});
  useEffect(() => {
    setInterval(() => {
      setTimer({
        hour: 24 - new Date().getHours(),
        min: 60 - new Date().getMinutes(),
        sec: 60 - new Date().getSeconds(),
      });
    }, 1000);
  }, []);

  return (
    <div className="anouncements">
      <span style={{ fontWeight: "800", marginRight: "10px" }}>
        Lightning Deals! Ending in:{" "}
      </span>
      <span tyle={{ fontWeight: "500" }}>
        {timer.hour} : {timer.min} : {timer.sec}
      </span>
    </div>
  );
};

export default Anouncements;
