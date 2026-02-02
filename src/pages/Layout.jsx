import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
