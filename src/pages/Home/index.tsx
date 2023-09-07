import cocktail from '../../assets/cocktail_white.png'
import '../../App.css'
import { useNavigate } from 'react-router-dom';
import PATH from '../../domain/constants/path';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="roundedCard">
                <div className="title">MBTI 밸런스 게임<div>-칵테일편-</div></div>
                <div>
                    <img src={cocktail} className="logo_cocktail" alt="cocktail logo" />
                </div>
                <button className="start_button" onClick={() => navigate(PATH.test)}>start</button>
            </div>
            <br />
            <button className="menu_button" onClick={() => navigate(PATH.menu)}>
                칵테일MENU 보러가기🧾
            </button>
        </>
    );
}

export default Home;
