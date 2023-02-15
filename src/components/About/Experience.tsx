import "./Experience.scss";

const Experience = ({data}: {data: any}) => {
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
        <div className="experience">
            <div>{data.position}</div>
            <div>{createDates()}</div>
            <div>{data.company}</div>
            <div>{data.description}</div>
            <div>{data.technologies}</div>
        </div>
    )
}

export default Experience;