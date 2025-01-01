import React, { useState, useEffect } from "react";

const ChangeYear: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const amPm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;

      setTime(formattedTime);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="curenttime">{time}</div>;
};
export default ChangeYear;
