type BioData = {
    name : string
    description: string
    skills: Array<string>
    myWorkRef: React.RefObject<HTMLDivElement>;
    contactMeRef: React.RefObject<HTMLDivElement>;
    ref: React.RefObject<HTMLDivElement>;
}


export default function HeroSection ({name, description, skills, myWorkRef, contactMeRef, ref}: BioData) {

    function handleScroll(ref: any) {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }

    return <section className="heroSection" ref={ref}>
        <center>
            <p className="intro"> Hello, I'm </p>
            <h1>{name}</h1>
            <h2 style={{ whiteSpace: "pre-line" }}>{description}</h2>
            <div className=" btn-container">
                <button className="hero-btn view-my-work-btn" onClick={() => {handleScroll(myWorkRef)}}>View My Work</button>
                <button className="hero-btn contact-me-btn mild-border" onClick={() => {handleScroll(contactMeRef)}}>Contact Me</button>
            </div>
            <div className="skills-container">
            {skills.map((skill, idx) => (
                <span className="skill mild-border hover" key={idx}> {skill} </span>
            ))}
            </div>
        </center>
    </section>
}