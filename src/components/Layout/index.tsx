import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { LoginModal } from "../LoginModal";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function Layout() {
  return (
    <>
      <Header />
      <LoginModal />
      <ToastContainer />
      <Outlet />
    </>
  );
}
