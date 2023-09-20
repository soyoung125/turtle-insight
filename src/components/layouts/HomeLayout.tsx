import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Topbar from "../common/Topbar";
import '../../style/Home.css'
import '../../assets/images/bookmark.jpg';
import '../../../ads.txt';

function HomeLayout() {
    const location = useLocation();

    return (
        <div className={location.pathname === '/' ? 'start_background' : 'pink_background'}>
            <Topbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default HomeLayout;