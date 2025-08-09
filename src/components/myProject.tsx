import type React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type myProjectProps = {
    description: string
    children: React.ReactNode 
    githubUrl: string
}

export default function MyProject({description, children, githubUrl}: myProjectProps) {

    return <section className="flex-col-center myproject-ctn" id="my-work">
    
    <h5>My Projects</h5>
    <div className='div-border' id="skills-border-bottom"></div>
    <p className="bio-info" style={{ whiteSpace: "pre-line", textAlign:"center" }}>
        {description}
    </p>
    <div className="card-ctn flex-wrap">
        {children}
    </div>
    <a style={{textAlign: "center"}} target="_blank" className='gotoGithub' href={githubUrl}><FontAwesomeIcon  icon={faGithub as IconProp} style={{ marginRight: '0.5rem' }}/>View More on Github</a>
</section>
}