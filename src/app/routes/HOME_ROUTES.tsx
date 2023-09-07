import PATH from "../../domain/constants/path";
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Result from "../../pages/Result";
import Test from "../../pages/Test";
import { RouterDOM } from "../../types/common";

const HOME_ROUTES: RouterDOM[] = [
    {
        path: PATH.home,
        element: <Home />,
    },
    {
        path: PATH.test,
        element: <Test />,
    },
    {
        path: PATH.result,
        element: <Result />,
    },
    {
        path: PATH.menu,
        element: <Menu />,
    },
];

export default HOME_ROUTES;
