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

const ExperienceCard = ({data}: {data: ExperienceData}) => {

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

        return startDateString + " - " + endDateString;
    }

    return (
        <div className="experience-card hidden">
            <div className="card-header">
                <div className="position">
                    <span>
                        {data.position}
                    </span>
                    <span>
                        {" - "}
                    </span>
                    <span>
                        {data.company}
                    </span>
                </div>
                <div className="date">
                    <span>{createDates()}</span>
                </div>
            </div>
            <div className="card-content">
                <span>{data.description}</span>
            </div>
            { 
                data.technologies.length > 0 && 
                (
                    <div className="icons">
                        <div className="icon-group">
                            {data.technologies.map((technology, index) => <Icon icon={technology} key={Date.now() + index} />)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ExperienceCard;