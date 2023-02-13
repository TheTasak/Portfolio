import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const getMousePosition = () => {
        let e : any = window.event;
        let posX : number = e.clientX;
        if (posX < 10) {
            setShowNavbar(true);
        } else if (posX > 55) {
            setShowNavbar(false);
        }
    }

    return (
        <div className='navbar' onMouseMove={getMousePosition}>
            <div className={"background" + (showNavbar ? " hovered" : "")}>

            </div>
        </div>
    )
}

export default Navbar;