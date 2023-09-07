import PATH from "../../domain/constants/path";
import { RouterDOM } from "../../types/common";

const HOME_ROUTES: RouterDOM[] = [
    {
        path: PATH.home,
        element: <>home</>,
    },
    {
        path: PATH.test,
        element: <>test</>,
    },
    {
        path: PATH.result,
        element: <>result</>,
    },
    {
        path: PATH.menu,
        element: <>menu</>,
    },
];

export default HOME_ROUTES;
