import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Clothing } from "./pages/Clothing.tsx";
import { Homeware } from "./pages/Homeware.tsx";
import { Family } from "./pages/Family.tsx";
import { Food } from "./pages/Food.tsx";
import { WishList } from "./pages/WishList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/clothing",
    element: <Clothing />,
  },
  {
    path: "/homeware",
    element: <Homeware />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/family",
    element: <Family />,
  },
  {
    path: "/wish-list",
    element: <WishList />,
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);
import { NextUIProvider } from "@nextui-org/react";

root.render(
  <StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </StrictMode>,
);
