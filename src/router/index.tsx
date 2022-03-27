import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "../pages/Store";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
