import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import App from "./App";
import "./index.css";
import { GridPattern } from "./components/ui/grid-pattern";
import { cn } from "./lib/utils";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <GridPattern
                width={25}
                height={25}
                strokeDasharray="2 6"
                className={cn(
                    "fixed inset-0 z-0 pointer-events-none",
                    "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]"
                )}
            />
            <div className="relative  md:p-8 p-4">
                <App />
            </div>
        </BrowserRouter>
    </StrictMode>
);
