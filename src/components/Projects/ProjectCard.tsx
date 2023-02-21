import './Projects.scss';
import Icon from "../Utilities/Icon"

interface ProjectData {
    id: number,
    title: string,
    description: string,
    photoUrl: string,
    githubUrl: string,
    demoUrl: string,
    technologies: string[],
}

const ProjectCard = ({data}: {data: ProjectData}) => {
    console.log(data.photoUrl)
    return (
        <div className="project-card hidden">
            <div className="img">
                <img src={data.photoUrl} alt={"Image of " + data.title} />
            </div>
            <div className="content">
                <div className="content-header">
                    <span className="title">{data.title}</span>
                    {/* (to do) github and demo links */}
                </div>
                <div className="description">
                    <span>
                        {data.description}
                    </span>
                </div>
                <div className="icons">
                    <div className="icon-group">
                    {data.technologies.map((technology, index) => <Icon icon={technology} key={Date.now() + index} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;