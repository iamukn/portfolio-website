import { useNavigate } from "react-router-dom";

type BioData = {
    name : string
    description: string
    skills: Array<string>
    cvUrl: string
}


export default function HeroSection ({name, description, skills, cvUrl}: BioData) {

    const navigate = useNavigate();

    return <section className="heroSection">
        <center>
            <p className="intro"> Hello, I'm </p>
            <h1>{name}</h1>
            <h2 style={{ whiteSpace: "pre-line" }}>{description}</h2>
            <div className=" btn-container">
                <button className="hero-btn view-my-work-btn" onClick={() => {navigate('/projects')}}>View My Work</button>
                <a className="hero-btn mild-border cv-btn" href={cvUrl} target="_blank">View CV</a>
                <button className="hero-btn contact-me-btn mild-border" onClick={() => {navigate('/get-in-touch')}}>Contact Me</button>
            </div>
            <div className="skills-container">
            {skills.map((skill, idx) => (
                <span className="skill mild-border hover" key={idx}> {skill} </span>
            ))}
            </div>
        </center>
    </section>
}