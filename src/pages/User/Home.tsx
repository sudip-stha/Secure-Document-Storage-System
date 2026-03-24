import Header from "../../components/UserDashboard/Header";
import Main from "../../components/UserDashboard/Main";
import { useButtonAction } from "../../hooks/useButtonAction";

const Home = () => {
  const isModalOpen = useButtonAction((state) => state.isModalOpen);
  return (
    <div className={`z-50 bg-action-destructive ${isModalOpen ? "bg-cold-gray-700" : ""}`}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
