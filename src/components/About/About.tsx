import "./About.scss";
import { faGitAlt, faReact, faJs, faPhp, faFigma, faSass, faLinux, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import Icon from "../Utilities/Icon";

const About = () => {

    return (
        <div className="about" id="about">
            <div className="content-center">
                <div className="text-header hidden">About me</div>
                <div className="content hidden">
                    <div className="description">
                        <span>
                            {
                                "Hey!\n I'm Przemek, a passionate 20-year old student that is interested in anything remotely associated with computers and technology. " +
                                "Recently, after a rocky and turbulent journey with different programming languages I dipped my toes into web development and fell in love with it. " + 
                                "After gaining some experience, now I'm searching for a job in this exact field.\n" +
                                "\nMy other interests:"
                            }
                            <li>Investing and finance</li>
                            <li>Fantasy and Sci-Fi literature</li>
                        </span>
                    </div>
                    <div className="icons">
                        <Icon icon={faJs} title="Javascript"/>
                        <Icon icon={faReact} title="React"/>
                        <Icon icon={faGitAlt} title="Git"/>
                        <Icon icon={faCss3Alt} title="Css"/>
                        <Icon icon={faSass} title="Sass"/>
                        <Icon icon={faFigma} title="Figma"/>
                        <Icon icon={faPhp} title="PHP"/>
                        <Icon icon={faLinux} title="Linux"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;