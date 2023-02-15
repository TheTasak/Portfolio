import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const getMousePosition = () => {
        let e : any = window.event;
        let posX : number = e.clientX;
        if (posX < 20) {
            setShowNavbar(true);
        } else if (posX > 50) {
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