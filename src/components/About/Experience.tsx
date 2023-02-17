import Icon from "../Utilities/Icon";
import "./Experience.scss";

interface ExperienceData {
    id: number,
    position: string,
    company: string,
    started: string,
    finished: string,
    description: string,
    technologies: string[]
}

const Experience = ({data}: {data: ExperienceData}) => {
    const createDates = () => {
        const startDate = new Date(data.started);
        const endDate = data.finished ? new Date(data.finished) : null;
        const startDateString = startDate.toLocaleDateString("en-GB", {
            month: '2-digit',
            year: 'numeric'
        }).replace("/", ".");
        const endDateString = endDate ? 
        endDate.toLocaleDateString("en-GB", {
            month: '2-digit',
            year: 'numeric'
        }).replace("/", ".") : "now";
        return startDateString + "-" + endDateString;
    }

    return (
        <div className="experience-card">
            <p>{data.position}</p>
            <p>{createDates()}</p>
            <p>{data.company}</p>
            <div>
                <p>{data.description}</p>
            </div>
            <div className="icons">
                <div className="icon-group">
                    {data.technologies.map((technology, index) => <Icon icon={technology} key={Date.now() + index} />)}
                </div>
            </div>
        </div>
    )
}

export default Experience;