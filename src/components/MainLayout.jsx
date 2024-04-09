import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;