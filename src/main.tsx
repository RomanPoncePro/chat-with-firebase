import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config/firebase.ts";
import { BrowserRouter } from "react-router";
import FirebaseService from "./config/firebase-service.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseService>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseService>
    </FirebaseAppProvider>
  </StrictMode>
);
