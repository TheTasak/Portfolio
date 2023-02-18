import "./About.scss";
import Icon from "../Utilities/Icon";
import Experience from "./Experience";

const aboutDescription = 
"Hey!\n I'm Przemek, a passionate 20-year old student that is interested in anything remotely associated with computers and technology. " +
"Recently, after a rocky and turbulent journey with different programming languages I dipped my toes into web development and fell in love with it. " + 
"After gaining some hands-on experience, I'm looking to broaden my horizons in other technologies and become a fully proficient full-stack web developer.\n" +
"\nMy other interests include:";

const experienceData = 
[
    {
        id: 1,
        position: "Junior Full-Stack Developer",
        company: "GDSoft",
        started: "2022-11-01T00:00:00.000Z",
        finished: "2023-02-01T00:00:00.000Z",
        description: "Worked in scrum on multiple internal full-stack projects, using Rails and React.\n Wrote full coverage of databases using unit tests and managed application deployment using Jenkins and Docker.",
        technologies: [
            "React", "Redux", "Rails", "RSpec", "Sass"
        ]
    },
    {
        id: 2,
        position: "Junior Business Systems Specialist",
        company: "Adamed Pharma S.A.",
        started: "2022-06-01T00:00:00.000Z",
        finished: "2022-10-01T00:00:00.000Z",
        description: "Communicated with internal clients regarding specifications and requirements of desired software.\n Improved on and developed new functions using PHP and Oracle SQL for intranet websites e.g. system of user roles and permissions or system of automatic emails.",
        technologies: [
            "PHP", "Javascript", "SQL", "Css"
        ]
    },
    {
        id: 3,
        position: "Virtual Assistant",
        company: "Ibac sp. z o.o.",
        started: "2020-11-01T00:00:00.000Z",
        finished: "2022-04-01T00:00:00.000Z",
        description: "Created online store websites using Shopify and custom plugins.\n Contacted and searched for potential customers.",
        technologies: []
    }
];

const About = () => {

    return (
        <section className="about" id="about">
            <div className="content-center">
                <div className="content">
                    <div className="description hidden">
                        <h3 className="text-header">About me</h3>
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
            <div className="experience-group">
                {
                    experienceData.map(experience => <Experience key={experience.id} data={experience} />)
                }
            </div>
        </section>
    )
}

export default About;