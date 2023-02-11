import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Skill.scss';

const Skill = ({icon, title}: {icon: any, title: string}) => {
    return (
        <div className='skill'>
            <FontAwesomeIcon icon={faPlay} size="xs" />
            {title}
            {/* <FontAwesomeIcon icon={icon} size="1x" /> */}
        </div>
    )
}

export default Skill;