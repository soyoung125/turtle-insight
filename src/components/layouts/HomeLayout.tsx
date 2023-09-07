import { createBrowserRouter, Outlet } from "react-router-dom";
import Topbar from "../common/Topbar";
import '../../style/Home.css'

function HomeLayout() {
    return (
        <>
            <Topbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}

export default HomeLayout;