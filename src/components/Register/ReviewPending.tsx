import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";

const ReviewPending = () => {
  return (
    <div className="text-center p-6 border rounded-lg">
      <h2 className="text-xl font-semibold">Security Review Pending</h2>

      <p className="text-gray-400 mt-2">
        Your account is awaiting admin approval.
      </p>

      <Link to={appRoutes.Login}>Return to Login</Link>
    </div>
  );
};

export default ReviewPending;
