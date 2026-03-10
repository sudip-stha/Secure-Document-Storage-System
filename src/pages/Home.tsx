import { Link } from "react-router-dom";
import { appRoutes } from "../routes/routes";

const Home = () => {
  return (
    <div>
      
      <Link to={appRoutes.Register}>Register</Link>
    </div>
  );
};

export default Home;
