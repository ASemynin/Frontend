import "./HeaderStyle.css"
import logo from  "../../media/images/Logo.svg"
import {HandySvg} from 'handy-svg';

function Header () {
    return(
        <div className="navigate">
            <div className="navLogo">
                <HandySvg src={logo} className="icon" width="265" height="27"/>
            </div>
            <div className="navWrap">
                <ul>
                    <li>Менеджеры</li>
                    <li>Подарок</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
