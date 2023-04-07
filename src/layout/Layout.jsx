import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <Aside />
      <main className="md:w-3/4 pt-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
