import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_white.png'
import PATH from '../../domain/constants/path';

function Topbar() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(PATH.home)}>
            <img src={logo} className="logo" alt="turtleinsight logo" />
        </div>
    );
}

export default Topbar;
