import TextHeader from '../Utilities/TextHeader';
import './Experience.scss';
import ExperienceCard from './ExperienceCard';


const experienceData = 
[
    {
        id: 1,
        position: "Junior Full-Stack Developer",
        company: "GDSoft",
        started: "2022-11-01T00:00:00.000Z",
        finished: "2023-02-01T00:00:00.000Z",
        description: "Worked in Scrum on multiple internal full-stack projects, using Rails and React.\n Wrote full coverage of database queries using unit tests and managed application deployment using Jenkins and Docker.",
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

const Experience = () => {
    return (
        <section className='experience section'>
            <div className='experience-header'>
                <TextHeader>EXPERIENCE</TextHeader>
            </div>
            <div className="experience-group">
                {
                    experienceData.map(experience => <ExperienceCard key={experience.id} data={experience} />)
                }
            </div>
        </section>
    )
}

export default Experience;