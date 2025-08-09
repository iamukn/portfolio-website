import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import BrandName from "./brandName"
import Switch from "./switch"
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";


export default function NavBar () {

    function hamburgerClicked () {
        const navLinks = document.getElementsByClassName('nav-links')[0] as HTMLElement;
        console.log(navLinks)
        navLinks.classList.toggle('show');
        console.log('Hamburger clicked')
    }

    const styles = {cursor: "pointer", color: "whitesmoke"}


    return <nav className="flex nav">
        <BrandName brandName="💻" />
        <ul className="nav-links">
            <NavLink to={'/'} className="nav-li" style={styles}>Home</NavLink>
            <NavLink to={'/about-me'} className="nav-li" style={styles}>About</NavLink>
            <NavLink to={'/skills'} className="nav-li" style={styles}>Skills</NavLink>
            <NavLink to={'/projects'} className="nav-li" style={styles}>Projects</NavLink>
            <NavLink to={'/get-in-touch'} className="nav-li" style={styles}>Contact</NavLink>
        </ul>
        
        <Switch>
            <FontAwesomeIcon icon={faMoon as IconProp}/>
        </Switch>
        <div className="hamburger" id="hamburger" onClick={hamburgerClicked}>&#9776;</div>
    </nav>
}