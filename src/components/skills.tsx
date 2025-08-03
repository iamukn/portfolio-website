type Skill = {
  skill: string;
  progress: number;
};

type skillsProp = {
    description: string
    skills : Skill[]
    extraSkills: Skill[]
    ref: any
}

export default function Skills({description, skills, extraSkills, ref}: skillsProp) {
    return <section className="flex-col-center skills-ctn" ref={ref}>
        <h5>My Skills</h5>
        <div className='div-border' id="skills-border-bottom"></div>
        <p className="bio-info" style={{ whiteSpace: "pre-line", textAlign:"center" }}>
            {description}
        </p>
        <div className="flex-row-center progess-ctn">
            <div className="progress">
                {

                    skills.map(skill => (
                        <div className="progress-ctn" key={skill.skill}>
                            <div style={{marginBottom: "10px"}}>
                                <span className="skill-data">{skill.skill}</span>
                                <span className="skill-percentage">{`${skill.progress}%`}</span>
                            </div>
                            <div className="progress-bar-ctn">
                                <div style={{width: `${skill.progress}%`, borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", backgroundColor: "#5a8fd6", height: "100%"}}></div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="progress">
                {
                

                    extraSkills.map(skill => (
                        <div className="progress-ctn" key={skill.skill}>
                            <div style={{marginBottom: "10px"}}>
                                <span className="skill-data">{skill.skill}</span>
                                <span className="skill-percentage">{`${skill.progress}%`}</span>
                            </div>
                            <div className="progress-bar-ctn">
                                <div style={{width: `${skill.progress}%`, borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", backgroundColor: "#5a8fd6", height: "100%"}}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="skills-list-ctn flex">
            <div className="flex skills-list-ctn-div">
                {
                    skills.map(skill => (
                        <li key={skill.skill}>{skill.skill}</li>
                    ))
                }
            </div>
            <div className="flex skills-list-ctn-div">
                {
                    extraSkills.map(skill => (
                        <li key={skill.skill}>{skill.skill}</li>
                    ))
                }
            </div>
        </div>
        
    </section>
}