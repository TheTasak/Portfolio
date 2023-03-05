import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { scrollInto } from "../Utilities/Utilities";

const Header = () => {

    return (
        <section className="header box-center">
            <div className='background'>
            </div>
            <div className="content-center">
                <h1 className="text-main">Przemysław Tasarz</h1>
                <h2 className="text-sub">Full-Stack Developer</h2>
                <FontAwesomeIcon icon={faAngleDown} size="xs" onClick={() => scrollInto("about")} />
            </div>
            <div className="links">
                <FontAwesomeIcon icon={faGithub} size="2x" onClick={() => window.open("https://github.com/TheTasak")}/>
                <FontAwesomeIcon icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/przemys%C5%82aw-tasarz-575402251/")} />
            </div>
        </section>
    )
}

export default Header;