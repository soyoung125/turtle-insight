import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Topbar from "../common/Topbar";
import '../../style/Home.css'

function HomeLayout() {
    const location = useLocation();
    console.log(location.pathname.includes('result'));

    return (
        <div className={location.pathname.includes('result') ? 'pink_background' : 'blue_background'}>
            <Topbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default HomeLayout;