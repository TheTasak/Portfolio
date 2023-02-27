import "./About.scss";
import Icon from "../Utilities/Icon";
import TextHeader from "../Utilities/TextHeader";

const aboutDescription = 
"\nHey!\n I'm Przemek, a passionate 20-year old student that is interested in anything remotely associated with computers and technology. " +
"Recently, after a rocky and turbulent journey with different programming languages I dipped my toes into web development and fell in love with it. " + 
"After gaining some hands-on experience, I'm looking to broaden my horizons in other technologies and become a fully proficient full-stack web developer.\n" +
"\nMy other interests include:";

const About = () => {

    return (
        <section className="about section" id="about">
            <div className="background">
            </div>
            <div className="content-center">
                <div className="content">
                    <div className="description hidden">
                        <div className="about-header">
                            <TextHeader>ABOUT ME</TextHeader>
                        </div>
                        <span>
                            {aboutDescription}
                            <li>Investing and finance</li>
                            <li>Fantasy and Sci-Fi literature</li>
                        </span>
                    </div>
                    <div className="icons hidden">
                        <h5 className="icon-group-heading">
                            Frontend
                        </h5>
                        <div className="icon-group">
                            <Icon icon="Javascript"/>
                            <Icon icon="React"/>
                            <Icon icon="Redux"/>
                            <Icon icon="Css"/>
                            <Icon icon="Sass"/>
                        </div>
                        <h5 className="icon-group-heading">
                            Backend
                        </h5>    
                        <div className="icon-group">
                            <Icon icon="PHP"/>
                            <Icon icon="Rails"/>
                            <Icon icon="RSpec"/>
                        </div>
                        <h5 className="icon-group-heading">
                            Miscellaneous
                        </h5>   
                        <div className="icon-group">
                            <Icon icon="Figma"/>
                            <Icon icon="Git"/>
                            <Icon icon="Linux"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;