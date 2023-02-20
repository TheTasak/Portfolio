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
    return (
        <div>
            {data.title}
        </div>
    )
}

export default ProjectCard;