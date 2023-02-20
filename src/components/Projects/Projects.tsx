import './Projects.scss';
import TextHeader from '../Utilities/TextHeader';
import ProjectCard from './ProjectCard';

const projectData = 
[
    {
        id: 1,
        title: 'EmergingPoland',
        description: '',
        photoUrl: '',
        githubUrl: '',
        demoUrl: '',
        technologies: [
            ""
        ]
    },
    {
        id: 2,
        title: 'BossaTransactionVisualiser',
        description: '',
        photoUrl: '',
        githubUrl: '',
        demoUrl: '',
        technologies: [
            ""
        ]
    },
    {
        id: 3,
        title: 'Bookemia',
        description: '',
        photoUrl: '',
        githubUrl: '',
        demoUrl: '',
        technologies: [
            ""
        ]
    },
];

const Projects = () => {
    return (
        <div className='projects section'>
            <div className='projects-header'>
                <TextHeader>PROJECTS</TextHeader>
            </div>
            <div className='project-group'>
                { projectData.map(project => <ProjectCard data={project} key={project.id} />) }
            </div>
        </div>
    )
}

export default Projects;