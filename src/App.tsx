import { Router } from "./router";
import styles from "./styles/global.scss";

import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className={styles}>
      <Router />
    </div>
  );
}

export default App;
