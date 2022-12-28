import "./FooterStyle.css"
import logo from  "../../media/images/Logo.svg"
import {HandySvg} from 'handy-svg';

function Footer() {
    return(
        <div className="footer">
            <div className="footerLogo">
                <HandySvg
                    src={logo}
                    className="icon"
                    width="265"
                    height="27"
                 />
            </div>
            <div className="copy">
                <p>Copyright © UNITEAM. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
