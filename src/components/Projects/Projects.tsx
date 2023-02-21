import './Projects.scss';
import TextHeader from '../Utilities/TextHeader';
import ProjectCard from './ProjectCard';

const projectData = 
[
    {
        id: 1,
        title: 'Bookemia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique blandit libero sed pharetra. Maecenas blandit dolor id sapien cursus, a tristique lectus maximus. Integer porta molestie magna, at rhoncus erat. Nunc condimentum, magna quis interdum iaculis, libero ex consectetur ante, quis mollis diam justo nec neque. Integer quam est, laoreet et ornare et, maximus non leo. Nulla eu nulla ac metus tempus cursus. Suspendisse nec erat pharetra, rutrum nibh non, fermentum est.',
        photoUrl: './src/assets/project1.png',
        githubUrl: 'https://github.com/TheTasak/Bookemia',
        demoUrl: '',
        technologies: [
            "React", "SQL"
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
            
        ]
    },
    {
        id: 3,
        title: 'EmergingPoland',
        description: '',
        photoUrl: '',
        githubUrl: '',
        demoUrl: '',
        technologies: [
            
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