import "./ManagersStyle.css"
import three from "../../media/images/three.svg"
import santa from "../../media/images/santa.svg"
import gifts from "../../media/images/gifts.svg"
import snowMan from "../../media/images/snowMan.svg"
import {HandySvg} from 'handy-svg';
import {director, people, production, service} from "./ManagersMap"


function Managers() {
    return (
        <div className="managers">
            <div className="director">
            <HandySvg src={three} className="three" width="700" height="661"/>
                <h1> - Директор ПБО</h1>
                <div className="managersWrap">
                    {director()}
                </div>
            </div>

            <div className="people">
            <HandySvg src={snowMan} className="snowMan" width="600" height="550"/>
                <h1> - Департамент Люди</h1>
                <div className="managersWrap">
                    {people()}
                </div>
            </div>

            <div className="production">
            <HandySvg src={santa} className="santa" width="700" height="661"/>
                <h1> - Департамент Производство</h1>
                <div className="managersWrap">
                    {production()}
                </div>
            </div>

            <div className="service">
            <HandySvg src={gifts} className="gifts" width="700" height="661"/>
                <h1> - Департамент Сервис</h1>
                <div className="managersWrap">
                    {service()}
                </div>
            </div>
        </div>
    )
}

export default Managers
