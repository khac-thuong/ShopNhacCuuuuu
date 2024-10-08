import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MainProvider } from "./context/mainprovider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./firebase-config.ts"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles/styles.css";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <App />
      </MainProvider>
    </QueryClientProvider>
  </StrictMode>
);
