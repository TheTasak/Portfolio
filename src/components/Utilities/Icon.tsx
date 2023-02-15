import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.scss';

const railsSvg = (
    <svg viewBox="0 0 128 128">
        <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M109.682 14.737c-12.206-6.023-24.708-6.636-37.508-2.111-11.779 4.164-21.175 11.615-28.16 21.763C32.195 51.561 23.61 70.298 18.799 90.652c-2.464 10.417-4.06 21.466-3.631 32.224.035.873.165 1.124.251 3.124h60.366c-.173-2-.287-1.416-.437-1.797a153.86 153.86 0 01-7.428-25.198c-2.498-12.251-3.806-24.729-1.226-37.093 3.611-17.313 13.48-29.805 30.117-36.283 9.424-3.667 18.369-2.624 26.214 4.262.072.063.22.025.412.056l2.565-3.883c-4.94-4.703-10.368-8.389-16.32-11.327zM3.336 94.394c-.46 3.923-.89 7.596-1.34 11.451l11.132 1.336 2.039-11.893-11.831-.894zm21.85-34.186l-10.471-4.097-3.384 9.607 10.671 3.42c1.08-3.031 2.096-5.882 3.184-8.93zm49.419 53.659c3.575.266 7.157.449 11.103.679-1.433-2.979-2.706-5.673-4.039-8.335-.146-.289-.639-.568-.974-.573-3.033-.044-6.068-.025-9.291-.025.726 2.628 1.357 5.053 2.096 7.443.111.361.707.782 1.105.811zM42.933 31.103l-7.955-5.268-6.359 7.105 8.178 5.496 6.136-7.333zm25.334 53.369c-.013.321.276.832.558.959 2.865 1.288 5.76 2.515 8.912 3.873-.131-2.492-.219-4.575-.368-6.654-.027-.374-.203-.912-.48-1.066-2.631-1.456-5.299-2.847-8.216-4.395-.159 2.665-.321 4.972-.406 7.283zM65.91 12.3l-5.446-6.181-7.499 3.898 5.455 6.644 7.49-4.361zm3.415 49.176c-.163.374.052 1.167.373 1.456 2.175 1.962 4.424 3.84 6.926 5.981.573-2.4 1.113-4.539 1.571-6.693.081-.383-.032-1.016-.298-1.23-1.946-1.569-3.955-3.063-6.037-4.651-.915 1.815-1.802 3.443-2.535 5.137zm12.45-52.424c2.78.075 5.563.042 8.499.042-.293-2.044-.433-3.593-.782-5.092-.104-.446-.775-1.04-1.228-1.078-2.787-.226-5.585-.313-8.651-.459.409 2.063.721 3.881 1.162 5.668.093.379.647.909 1 .919zm3.385 35.675c.142-.266.178-.749.029-.981-1.366-2.137-2.785-4.241-4.254-6.455l-4.76 4.372 6.582 7.294c.884-1.539 1.675-2.868 2.403-4.23zM90.295 30.2l2.843 5.281c4.449-2.438 4.875-3.32 3.3-6.834L90.295 30.2zm21.287-16.273c1.851 1.142 3.806 2.115 5.792 3.185l1.33-2.07c-2.422-1.771-4.76-3.484-7.413-5.426-.104 1.104-.259 1.875-.219 2.637.032.581.129 1.44.51 1.674zM109 30.646c2 .217 5 .424 7 .643v-2.718c-2-.438-5-.872-7-1.323v3.398z"></path>
    </svg>
)

const reduxSvg = (
    <svg viewBox="0 0 128 128">
        <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z" fill="#fff"></path>
    </svg>
)

const rspecSvg = (
    <svg viewBox="0 0 128 128">
        <path d="M47.305 125.883c-16.121-4.227-28.703-13.656-38.063-28.528-3.441-5.464-3.5-7.394-.34-11.25 2.383-2.91 2.52-2.94 7.993-1.675 4.394 1.011 6.003 1.992 7.648 4.652 3.195 5.168 12.902 13.867 18.746 16.797 18.047 9.047 40.035 5.32 54.195-9.184 3.082-3.152 6.227-7.238 6.989-9.082.761-1.84 1.734-3.347 2.16-3.347.426 0 1.668 1.976 2.758 4.39l1.976 4.39 5.215-.616c6.09-.723 6.094-.551.106 8.472-7.723 11.633-22.52 21.778-37.18 25.489-8.606 2.18-22.809 1.953-32.203-.508zm0 0" fill="#6de1fa"></path><path d="M48.023 80.945C39.75 70.902 32 60.758 30.797 58.395l-2.192-4.29 8.875-8.917 8.872-8.922h34.23l8.93 8.98 8.933 8.98-2.406 4.087c-2.902 4.925-31.195 40.757-32.242 40.835-.406.028-7.504-8.164-15.774-18.203zm0 0" fill="#fe405f"></path><path d="M111.156 84.793c-2.094-4.313-2.23-5.422-1.164-9.645.66-2.625.996-9.027.75-14.23-.379-7.887-1.008-10.582-3.8-16.254-6.52-13.246-17.31-22.418-30.59-26.016l-6.907-1.867 2.782-3.648c2.742-3.594 2.753-3.703.964-7.457-1-2.094-1.558-4.063-1.242-4.38C73.102.142 85.02 3.5 92.68 7.142c10.958 5.21 22.856 17.03 28.243 28.058 7.086 14.512 8.746 29.403 4.941 44.278-1.172 4.593-2.254 8.449-2.398 8.566-.145.121-2.442.531-5.106.918l-4.836.703zm0 0" fill="#97f0ff"></path><path d="M3.328 85.137c-4.121-10.84-4.195-29.52-.16-41.403 8.25-24.3 30.605-41.785 55.5-43.41l8-.523 2.445 4.394 2.45 4.395-2.934 4.082c-2.73 3.797-3.473 4.164-10.766 5.297-10.836 1.687-18.75 5.695-26.472 13.422-13.059 13.058-16.801 28.855-11.485 48.5.63 2.332.442 2.496-2.14 1.867l-5.286-1.285c-1.949-.473-3.035.222-5.285 3.386L4.36 87.848zm0 0" fill="#40daf4"></path>
    </svg>
)

const Icon = ({icon, title}: {icon: any, title: string}) => {
    return (
        <div className='icon hidden'>
            { 
                title !== "Redux" && title !== "Rails" ? <FontAwesomeIcon icon={icon} size="1x" /> : 
                (title === "Redux" ? reduxSvg : railsSvg)
            }
            <div className='text'>
                {title}
            </div>
        </div>
    )
}

export default Icon;