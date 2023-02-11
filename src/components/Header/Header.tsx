import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { scrollInto } from "../Utilities/Utilities";

const Header = () => {

    return (
        <div className="header box-center">
            <div className="content-center">
                <div className="text-main">Przemysław Tasarz</div>
                <div className="text-sub">Full-Stack Developer</div>
                <FontAwesomeIcon icon={faAngleDown} size="xs" onClick={() => scrollInto("about")} />
            </div>
            <div className="links">
                <FontAwesomeIcon icon={faGithub} size="2x" onClick={() => window.open("https://github.com/TheTasak")}/>
                <FontAwesomeIcon icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/przemys%C5%82aw-tasarz-575402251/")} />
            </div>
        </div>
    )
}

export default Header;