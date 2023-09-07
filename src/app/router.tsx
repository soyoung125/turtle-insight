import { createBrowserRouter } from "react-router-dom";
import HOME_ROUTES from "./routes/HOME_ROUTES";
import HomeLayout from "../components/layouts/HomeLayout";

const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomeLayout />,
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
  