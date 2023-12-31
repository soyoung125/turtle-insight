import KakaoAdFit from '../../components/common/KakaoAdFit';
import menu from '/assets/images/menu.jpg';

function Menu() {
    return (
        <>
            <div className='center'>
                <img src={menu} className="cocktail_menu" alt="menu image" />
            </div>
            <KakaoAdFit />
        </>
    )
}

export default Menu;
