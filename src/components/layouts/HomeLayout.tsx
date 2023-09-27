import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Topbar from "../common/Topbar";
import '../../style/Home.css'
import { COCKTAILS } from "../../domain/constants/cocktails";

function HomeLayout() {
    const location = useLocation();

    return (
        <>
            <div className={location.pathname === '/' ? 'start_background' : 'pink_background'}>
                <Topbar />
                <article className="loading">
                    {Object.keys(COCKTAILS).map((c) => <img src={COCKTAILS[c]} />)}
                </article>
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default HomeLayout;