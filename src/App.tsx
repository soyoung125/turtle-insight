import logo from '../src/assets/images/logo_white.png'
import cocktail from '../src/assets/images/cocktail_white.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={logo} className="logo" alt="turtleinsight logo" />
        </a>
      </div>
      <div className="container">
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
      </div>
    </>
  )
}

export default App
