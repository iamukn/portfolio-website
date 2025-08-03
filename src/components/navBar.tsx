import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import BrandName from "./brandName"
import Switch from "./switch"
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type refProps = {
    skillsRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    myWorkRef: React.RefObject<HTMLDivElement>;
    contactMeRef: React.RefObject<HTMLDivElement>;
} 


export default function NavBar ({skillsRef, aboutRef, myWorkRef, contactMeRef}: refProps) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function handleScroll(ref: any) {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }


    function hamburgerClicked () {
        const navLinks = document.getElementsByClassName('nav-links')[0] as HTMLElement;
        console.log(navLinks)
        navLinks.classList.toggle('show');
        console.log('Hamburger clicked')
    }


    return <div className="flex nav">
        <BrandName brandName="💻" />
        <ul className="nav-links">
            <li className="nav-li" style={{ cursor: "pointer" }} onClick={()=>scrollToTop()}>Home</li>
            <li className="nav-li" style={{ cursor: "pointer" }} onClick={()=>{handleScroll(aboutRef)}}>About</li>
            <li className="nav-li" style={{ cursor: "pointer" }} onClick={()=>{handleScroll(skillsRef)}}>Skills</li>
            <li className="nav-li" style={{ cursor: "pointer" }} onClick={()=>{handleScroll(myWorkRef)}}>Projects</li>
            <li className="nav-li" style={{ cursor: "pointer" }} onClick={()=>{handleScroll(contactMeRef)}}>Contact</li>
        </ul>
        
        <Switch>
            <FontAwesomeIcon icon={faMoon as IconProp}/>
        </Switch>
        <div className="hamburger" id="hamburger" onClick={hamburgerClicked}>&#9776;</div>
    </div>
}