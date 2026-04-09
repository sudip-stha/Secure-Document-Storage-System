import { useButtonAction } from "../../../hooks/useButtonAction";

const IncommingRequestBtn = () => {
  const isRequestBtnActive = useButtonAction(
    (state) => state.isRequestBtnActive,
  );
  const setIsRequestBtnActive = useButtonAction(
    (state) => state.setIsRequestBtnActive,
  );

  return (
    <div className="flex items-center p-0.5 rounded-lg max-w-68 bg-warm-gray-700">
      <button
        className={`flex gap-2 items-center text-text-secondary rounded-lg px-3 py-2 ${isRequestBtnActive === "incomming" ? "bg-action-primary text-white" : ""}`}
        onClick={() => setIsRequestBtnActive("incomming")}
      >
        <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
          <path
            d="M3.85742 3.42859L6.00028 5.57145M6.00028 5.57145L8.14314 3.42859M6.00028 5.57145V0.428589 M10.286 3.85718C10.5133 3.85718 10.7313 3.94748 10.8921 4.10823C11.0528 4.26897 11.1431 4.48699 11.1431 4.71432V10.7143C11.1431 10.9416 11.0528 11.1597 10.8921 11.3204C10.7313 11.4812 10.5133 11.5715 10.286 11.5715H1.71456C1.48724 11.5715 1.26922 11.4812 1.10847 11.3204C0.947728 11.1597 0.857422 10.9416 0.857422 10.7143V4.71432C0.857422 4.48699 0.947728 4.26897 1.10847 4.10823C1.26922 3.94748 1.48724 3.85718 1.71456 3.85718 M0.857422 4.93713L6.00028 8.57142L11.1431 4.93713"
            stroke="currentColor"
            strokeWidth="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span> Incomming</span>
      </button>
      <button
        className={`flex gap-2 items-center text-text-secondary rounded-lg px-3 py-2 ${isRequestBtnActive === "myRequest" ? "bg-action-primary text-white" : ""}`}
        onClick={() => setIsRequestBtnActive("myRequest")}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M10.0006 14L21.0006 3M10.0006 14L13.5006 21C13.5444 21.0957 13.6149 21.1769 13.7035 21.2338C13.7921 21.2906 13.8952 21.3209 14.0006 21.3209C14.1059 21.3209 14.209 21.2906 14.2976 21.2338C14.3862 21.1769 14.4567 21.0957 14.5006 21L21.0006 3M10.0006 14L3.00056 10.5C2.90482 10.4561 2.82369 10.3857 2.7668 10.2971C2.70992 10.2084 2.67969 10.1053 2.67969 10C2.67969 9.89468 2.70992 9.79158 2.7668 9.70295C2.82369 9.61431 2.90482 9.54387 3.00056 9.5L21.0006 3"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        My Requests
      </button>
    </div>
  );
};

export default IncommingRequestBtn;
