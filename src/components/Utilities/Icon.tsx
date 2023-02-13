import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.scss';

const Icon = ({icon, title}: {icon: any, title: string}) => {
    return (
        <div className='icon'>
            <FontAwesomeIcon icon={icon} size="1x" />
            <div className='text'>
                {title}
            </div>
        </div>
    )
}

export default Icon;