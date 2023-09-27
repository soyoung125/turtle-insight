import '../../App.css'
import { useNavigate } from 'react-router-dom';
import PATH from '../../domain/constants/path';
import { COCKTAILS } from '../../domain/constants/cocktails';
import KakaoAdFit from '../../components/common/KakaoAdFit';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="blue_text">
                <div className="title">MBTI 밸런스 게임<div>-칵테일편-</div></div>
                <img src={COCKTAILS.default} className="logo_cocktail" alt="cocktail logo" />

                <div className='start_area'>
                    <div className='sub_title'>나와 어울리는 칵테일을 찾아보세요.</div>
                    <button className="start_button" onClick={() => navigate(PATH.test)}>start</button>
                    <button className="menu_button" onClick={() => navigate(PATH.menu)}>
                        칵테일 메뉴 보러가기
                    </button>
                </div>
            </div>
            <div className='extra'><a href="mailto:insightturtle@gmail.com">문의 및 광고 제안하기📬</a></div>
            <KakaoAdFit />
        </>
    );
}

export default Home;
