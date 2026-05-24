import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <MainLayout>
                <App />
            </MainLayout>
        </BrowserRouter>
    </StrictMode>
);
