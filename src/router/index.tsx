import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "../pages/Store";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { ModalProvider } from "../contexts/Modal";
import { AuthProvider } from "../contexts/Auth";
import { UserGames } from "../pages/UserGames";
import { CreateGame } from "../pages/CreateGame";

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/library" element={<UserGames />} />
              <Route path="/game/create" element={<CreateGame />} />
            </Route>
          </Routes>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
