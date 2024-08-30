import { Outlet } from "react-router-dom";
import { NavBar } from "../components/shared/navbar";
import { Footer } from "../components/shared/footer";

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
