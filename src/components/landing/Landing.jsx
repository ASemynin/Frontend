import "./LandingStyle.css"
import {HandySvg} from 'handy-svg';
import logo from  "../../media/images/btn.svg"
import { Link} from "react-scroll";

function Landing () {
    return (
        <div className="landing">
            <div className="targets_wrap">
                <div className="text_wrapper">
                    <h1>Цели на смену</h1> 
                    <h5>Может быть, тот, кто больше всех делает, больше других мечтает." (Стивен Ликок)"</h5>
                    <Link to="targets" smooth={true} className="btn">Перейти к целям {">"}{">"}</Link>
                </div>
            </div>
            <div className="landing_video">
                <div className="videoBtn" onClick= {() => {}}>
                <HandySvg src={logo} className="videoBtn" width="80" height="80"/>
                </div>
            </div>
        </div>
    )
}

export default Landing
