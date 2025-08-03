import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import type { IconProp } from '@fortawesome/fontawesome-svg-core';



type cardProps = {
    title: string
    description: string
    technology: string[]
    imageUrl: string
    githubUrl: string
}

export default function Card({title, description, technology, githubUrl, imageUrl}: cardProps) {
    return <div className="card">
        <div className='card-img-ctn'>
            <img className='card-img' src={imageUrl} alt={`photo of ${title} portfolio`} />
        </div>
        <div className="card-desc-ctn">
                <h5 id="cardHeading">{title}</h5>
                <p id="cardDescription">
                    {description}
                </p>
                <ul className="cardList">
                    {
                        technology.map(tech=>(
                          <li className='hover tech-list' key={tech}>{tech}</li>
                        ))
                    }
                </ul>
                <a href={githubUrl} target="_blank" className='github-link'><FontAwesomeIcon  icon={faGithub as IconProp} style={{ marginRight: '0.2rem' }}/> Code</a>
        </div>
    </div>
}