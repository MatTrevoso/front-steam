import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

import styles from "./styles/global.scss";

import Modal from "react-modal";

const queryClient = new QueryClient();
Modal.setAppElement("#root");

function App() {
  return (
    <div className={styles}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
