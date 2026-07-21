const CountDownTimer = () => {
  return (
    <div className="flex items-center gap-2 border-2 px-7 font-medium text-[16px] rounded-[25px] text-blue-400 bg-blue-900">
      <img
        src="/public/icons/countDownTimerIcon.svg"
        alt="Count down timer icon."
        className="w-4.5"
      />
      <span>4:41</span>
    </div>
  );
};

export default CountDownTimer;
