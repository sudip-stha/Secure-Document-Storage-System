import Heading2 from "../../ui/Heading2";
import Heading3 from "../../ui/Heading3";

const NotificationModal = () => {
  return (
    <div>
      <div>
        <Heading2 value="Notifications" />
        <img src="/icons/crossIcon.svg" alt="" />
      </div>
      <div>
        <div>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2078_5505)">
              <path
                d="M7.37472 4.04158C7.45062 3.96299 7.49262 3.85774 7.49167 3.7485C7.49072 3.63925 7.4469 3.53474 7.36965 3.45749C7.29239 3.38023 7.18789 3.33641 7.07864 3.33546C6.96939 3.33452 6.86414 3.37651 6.78556 3.45241L4.57722 5.66075L3.20222 4.28575C3.12364 4.20985 3.01839 4.16785 2.90914 4.1688C2.79989 4.16975 2.69539 4.21357 2.61813 4.29082C2.54088 4.36807 2.49706 4.47258 2.49611 4.58183C2.49516 4.69108 2.53716 4.79633 2.61306 4.87491L4.27972 6.54158C4.35786 6.61969 4.46382 6.66357 4.57431 6.66357C4.68479 6.66357 4.79075 6.61969 4.86889 6.54158L7.36889 4.04158H7.37472Z"
                fill="#25C98E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5C10 7.75833 7.75833 10 5 10C2.24167 10 0 7.75833 0 5C0 2.24167 2.24167 0 5 0C7.75833 0 10 2.24167 10 5ZM9.16667 5C9.16667 7.3 7.3 9.16667 5 9.16667C2.7 9.16667 0.833333 7.3 0.833333 5C0.833333 2.7 2.7 0.833333 5 0.833333C7.3 0.833333 9.16667 2.7 9.16667 5Z"
                fill="#25C98E"
              />
            </g>
            <defs>
              <clipPath id="clip0_2078_5505">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Heading3 value="No Notifications" />
        <span>You’re all caught up! New notifications will appear here.</span>
      </div>
    </div>
  );
};

export default NotificationModal;
