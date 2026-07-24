import { Outlet } from "react-router-dom";
import Header from "../components/UserDashboard/Header";
import { useButtonAction } from "../hooks/useButtonAction";
import AdminAside from "../components/AdminDashboard/AdminAside";

const AdminLayout = () => {
  const isModalOpen = useButtonAction((state) => state.isModalOpen);
  return (
    <div>
      <Header />
      <main className="flex bg-overlay-surface pt-1.5">
        <AdminAside />
        {/* <Outlet /> is what makes the child route's element actually render inside this layout — this is the piece that was missing before. */}
        <Outlet />
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 bg-cold-gray-700 opacity-55 z-20" />
      )}
    </div>
  );
};

export default AdminLayout;
