import cocktail from '../../assets/cocktail_white.png'
import '../../App.css'

function Home() {
    return (
        <>
            <div className="roundedCard">
                <h2>MBTI 밸런스 게임 칵테일편</h2>
                <div>
                    <img src={cocktail} className="logo_cocktail" alt="cocktail logo" />
                </div>
                <button className="start_button" onClick={() => alert('start!')}>start</button>
            </div>
            <br />
            <button className="menu_button" onClick={() => alert('메뉴 준비중...')}>
                칵테일MENU 보러가기🔖🧾
            </button>
        </>
    );
}

export default Home;
