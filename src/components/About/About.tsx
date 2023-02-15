import "./About.scss";
import { faGitAlt, faReact, faJs, faPhp, faFigma, faSass, faLinux, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import Icon from "../Utilities/Icon";

const aboutDescription = 
"Hey!\n I'm Przemek, a passionate 20-year old student that is interested in anything remotely associated with computers and technology. " +
"Recently, after a rocky and turbulent journey with different programming languages I dipped my toes into web development and fell in love with it. " + 
"After gaining some on-board experience, I'm looking to broaden my horizons in other technologies and become a fully proficient full-stack web developer.\n" +
"\nMy other interests include:";

const About = () => {

    return (
        <div className="about" id="about">
            <div className="content-center">
                <div className="content">
                    <div className="description hidden">
                        <div className="text-header">About me</div>
                        <span>
                            {aboutDescription}
                            <li>Investing and finance</li>
                            <li>Fantasy and Sci-Fi literature</li>
                        </span>
                    </div>
                    <div className="icons">
                        <div className="icon-group-heading hidden">
                            Frontend
                        </div>
                        <div className="icon-group">
                            <Icon icon={faJs} title="Javascript"/>
                            <Icon icon={faReact} title="React"/>
                            <Icon icon={undefined} title="Redux"/>
                            <Icon icon={faCss3Alt} title="Css"/>
                            <Icon icon={faSass} title="Sass"/>
                        </div>
                        <div className="icon-group-heading hidden">
                            Backend
                        </div>    
                        <div className="icon-group">
                            <Icon icon={faPhp} title="PHP"/>
                            <Icon icon={undefined} title="Rails"/>
                        </div>
                        <div className="icon-group-heading hidden">
                            Miscellaneous
                        </div>   
                        <div className="icon-group">
                            <Icon icon={faFigma} title="Figma"/>
                            <Icon icon={faGitAlt} title="Git"/>
                            <Icon icon={faLinux} title="Linux"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience">
                Hello
            </div>
        </div>
    )
}

export default About;