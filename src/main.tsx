// Tools
import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@store/store";
import { Provider } from "react-redux";
import "./services/axios-global";
// css files
import "./styles/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/resetBootstartp.css";
import "./styles/style.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
