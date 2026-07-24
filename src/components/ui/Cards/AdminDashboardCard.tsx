import type { AdminDashboardCardProps } from "../../../types/data";

const AdminDashboardCard = ({ statData }: AdminDashboardCardProps) => {
  const statValueColor = {
    PendingReviews: "text-status-warning-500",
    ActiveUsers: "text-status-success-500",
    TotalDocuments: "text-blue-500",
    EventsToday: "text-status-info-500",
  };
  type StatTitle = keyof typeof statValueColor;

  const titleColor = statData.title.replace(/\s+/g, "") as StatTitle;
  console.log(titleColor);

  return (
    <div className="flex flex-col gap-4 px-5 py-8 bg-elevated-surface border border-default-border rounded-lg">
      <div className="flex gap-49 items-center">
        <img src={statData.iconPath} alt="" className="w-6" />
        <span
          className={`font-poppins font-bold text-[32px] ${statValueColor[titleColor]}`}
        >
          {statData.value}
        </span>
      </div>
      <span className="font-dmsans font-medium text-[16px] text-text-secondary">
        {statData.title}
      </span>
    </div>
  );
};

export default AdminDashboardCard;
