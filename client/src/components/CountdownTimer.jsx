import React, { useState, useEffect } from 'react';

const CountdownCircle = ({ value, label }) => (
  <div className="countdown-circle bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-md">
    <div className="countdown-value text-2xl font-bold text-gray-800">{value}</div>
    <div className="countdown-label text-xs text-gray-600">{label}</div>
  </div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date('2024-03-02T00:00:00Z'); // Set your target date and time
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      // Target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex justify-between mt-8">
      <CountdownCircle value={timeLeft.days} label="Days" />
      <CountdownCircle value={timeLeft.hours} label="Hours" />
      <CountdownCircle value={timeLeft.minutes} label="Minutes" />
      <CountdownCircle value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;

