import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const MainLayout = ({ handleLogIn, loggedIn }) => {
  return (
    <>
      <Navbar handleLogIn={handleLogIn} loggedIn={loggedIn} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
