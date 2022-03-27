import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { LoginModal } from "../LoginModal";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const onRequestClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header />
      <LoginModal isOpen={isOpen} onRequestClose={onRequestClose} />
      <Outlet />
    </>
  );
}
