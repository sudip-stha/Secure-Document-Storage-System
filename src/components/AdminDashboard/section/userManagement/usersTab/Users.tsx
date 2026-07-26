import { userStatusData } from "../../../../../data/userStatusData";
import UserCard from "./userCard/UserCard";

const Users = () => {
  return (
    <div className="flex flex-col gap-3">
      {userStatusData.map((data) => {
        return <UserCard key={data.email} data={data} />;
      })}
    </div>
  );
};

export default Users;
