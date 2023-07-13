import React, { useEffect, useState } from "react";

const Timer = ({ setTimeOut, questionNumber }) => {
  const [timer, setTimer] = useState(30);
  
  // This useEffect will run on each second
  useEffect(() => {
    if (timer === 0) return setTimeOut(true); // We are ending the game here
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1); // Each second we are decreasing by 1
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30); // For each question we are getting 30 seconds
  }, [questionNumber]); // New Question
  return timer;
};

export default Timer;