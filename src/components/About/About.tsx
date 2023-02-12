import "./About.scss";
import { faGitAlt, faReact, faJs, faPhp, faFigma, faSass, faLinux, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import Icon from "../Utilities/Icon";

const About = () => {

    return (
        <div className="about" id="about">
            <div className="content-center">
                <div className="text-header hidden">About me</div>
                <div className="content hidden">
                    <div className="description">Hello!<br></br>
                        Nullam vitae enim id est semper tincidunt id in urna. Donec sit amet diam nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam lobortis, nibh sed sagittis varius, quam turpis iaculis risus, eu suscipit erat dui sed mauris. Duis sagittis rutrum massa sit amet euismod. Fusce iaculis, mi ut viverra vehicula, massa est efficitur augue, nec convallis elit diam ac lectus. Nunc rutrum sit amet nisl ut vestibulum. Aliquam ac metus ac neque gravida congue luctus viverra massa.
                        <br></br>
                        Morbi eu purus et leo venenatis convallis nec ac ipsum. Fusce suscipit neque nec mi tincidunt, vitae maximus nibh consequat. Sed tincidunt semper diam tristique congue. Pellentesque sed leo vel ante elementum suscipit. Ut a nulla erat.
                    </div>
                    <Icon icon={faJs} title="Javascript"/>
                    <Icon icon={faReact} title="React"/>
                    <Icon icon={faGitAlt} title="Git"/>
                    <Icon icon={faCss3Alt} title="Css"/>
                    <Icon icon={faSass} title="Sass"/>
                    <Icon icon={faFigma} title="Figma"/>
                    <Icon icon={faPhp} title="PHP"/>
                    <Icon icon={faLinux} title="Linux"/>
                </div>
            </div>
        </div>
    )
}

export default About;