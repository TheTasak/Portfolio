import "./About.scss";
import Icon from "../Utilities/Icon";
import Experience from "./Experience";

const aboutDescription = 
"Hey!\n I'm Przemek, a passionate 20-year old student that is interested in anything remotely associated with computers and technology. " +
"Recently, after a rocky and turbulent journey with different programming languages I dipped my toes into web development and fell in love with it. " + 
"After gaining some on-board experience, I'm looking to broaden my horizons in other technologies and become a fully proficient full-stack web developer.\n" +
"\nMy other interests include:";

const experienceData = 
[
    {
        id: 1,
        position: "Junior Full-Stack Developer",
        company: "GDSoft",
        started: "2022-11-01T00:00:00.000Z",
        finished: "2023-02-01T00:00:00.000Z",
        description: "lorem ipsum",
        technologies: [
            "React", "Redux", "Rails", "RSpec", "Sass"
        ]
    },
    {
        id: 2,
        position: "Junior Business Systems Specialist",
        company: "Adamed Pharma S.A.",
        started: "2022-06-01T00:00:00.000Z",
        finished: "2023-10-01T00:00:00.000Z",
        description: "lorem ipsum",
        technologies: [
            "Php", "Javascript", "OracleSQL", "Css"
        ]
    },
    {
        id: 3,
        position: "Virtual Assistant",
        company: "Ibac sp. z o.o.",
        started: "2020-11-01T00:00:00.000Z",
        finished: "2022-04-01T00:00:00.000Z",
        description: "lorem ipsum",
        technologies: []
    }
];

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
                            <Icon icon="Javascript"/>
                            <Icon icon="React"/>
                            <Icon icon="Redux"/>
                            <Icon icon="Css"/>
                            <Icon icon="Sass"/>
                        </div>
                        <div className="icon-group-heading hidden">
                            Backend
                        </div>    
                        <div className="icon-group">
                            <Icon icon="PHP"/>
                            <Icon icon="Rails"/>
                            <Icon icon="RSpec"/>
                        </div>
                        <div className="icon-group-heading hidden">
                            Miscellaneous
                        </div>   
                        <div className="icon-group">
                            <Icon icon="Figma"/>
                            <Icon icon="Git"/>
                            <Icon icon="Linux"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience">
                {
                    experienceData.map(experience => <Experience key={experience.id} data={experience} />)
                }
            </div>
        </div>
    )
}

export default About;