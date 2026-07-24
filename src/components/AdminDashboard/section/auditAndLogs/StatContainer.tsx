import { adminStatData } from "../../../../data/adminStatData";
import AdminDashboardCard from "../../../ui/Cards/AdminDashboardCard";

const StatContainer = () => {
  return (
    <div className="flex gap-3">
      {adminStatData.map((statData) => {
        return <AdminDashboardCard key={statData.id} statData={statData} />;
      })}
    </div>
  );
};

export default StatContainer;
