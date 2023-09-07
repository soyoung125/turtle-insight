import { createBrowserRouter, Outlet } from "react-router-dom";
import HOME_ROUTES from "./routes/HOME_ROUTES";

const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <><div>topbar</div><div><Outlet /></div></>,
        children: [
          {
            path: "/",
            children: HOME_ROUTES,
          }
        ],
      },
    ]
  );
  
  export default router;
  