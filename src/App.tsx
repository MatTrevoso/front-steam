import { useState } from "react";
import { Header } from "./components/Header";
import styles from "./styles/global.scss";

function App() {
  return (
    <div className={styles}>
      <Header />
    </div>
  );
}

export default App;
