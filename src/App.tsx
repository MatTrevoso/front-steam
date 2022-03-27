import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Router } from "./router";
import styles from "./styles/global.scss";

function App() {
  return (
    <div className={styles}>
      {/*  <Header /> */}
      <Router />
    </div>
  );
}

export default App;
