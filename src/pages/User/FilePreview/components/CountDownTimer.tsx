import { useEffect, useState } from "react";

const CountDownTimer = ({ startTimer }: { startTimer: boolean }) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    if (!startTimer || timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTimer, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <div
      className={`flex items-center gap-2 border-2 px-7 font-medium text-[16px] rounded-[25px] ${minutes >= 3 && minutes <= 5 ? "text-blue-400 bg-blue-900 " : minutes >= 1 && minutes <= 2 ? "text-authorisation-pending-text bg-authorisation-pending-border" : "text-authorisation-expired-text bg-authorisation-expired-border"}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.75 2.981L3.9 0.75M18.75 2.981L15.6 0.75M17.75 10.75C17.75 12.8717 16.9071 14.9066 15.4069 16.4069C13.9066 17.9071 11.8717 18.75 9.75 18.75C7.62827 18.75 5.59344 17.9071 4.09315 16.4069C2.59285 14.9066 1.75 12.8717 1.75 10.75C1.75 8.62827 2.59285 6.59344 4.09315 5.09315C5.59344 3.59285 7.62827 2.75 9.75 2.75C11.8717 2.75 13.9066 3.59285 15.4069 5.09315C16.9071 6.59344 17.75 8.62827 17.75 10.75Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.75 6.25V11.25L12.75 13.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>
        {minutes}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};

export default CountDownTimer;
