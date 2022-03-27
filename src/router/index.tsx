import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "../pages/Store";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { ModalProvider } from "../contexts/Modal";
import { AuthProvider } from "../contexts/Auth";

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
            </Route>
          </Routes>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
