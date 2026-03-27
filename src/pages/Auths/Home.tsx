import Header from "../../components/UserDashboard/Header";
import Main from "../../components/UserDashboard/Main";
import { useButtonAction } from "../../hooks/useButtonAction";

const Home = () => {
  const isModalOpen = useButtonAction((state) => state.isModalOpen);
  return (
    <div>
      <Header />
      <Main />
      {isModalOpen && (
        <div className="fixed inset-0 bg-cold-gray-700 opacity-55 z-20" />
      )}
    </div>
  );
};

export default Home;
