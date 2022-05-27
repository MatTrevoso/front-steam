import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { SignInModal } from "../SignInModal";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function Layout() {
  return (
    <>
      <Header />
      <SignInModal />
      <ToastContainer />
      <Outlet />
    </>
  );
}
