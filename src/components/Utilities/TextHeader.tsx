import './TextHeader.scss';

const TextHeader = ({children}: {children: string}) => {
    return (
        <h3 className="text-header hidden">
            {children}
        </h3>
    )
}

export default TextHeader;