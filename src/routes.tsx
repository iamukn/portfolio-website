import {createBrowserRouter} from "react-router-dom";

// Base Component
import Base from "./main";

// Other Components
import AboutMe from "./components/aboutMe";
import HeroSection from "./components/heroSection";
import Skills from "./components/skills";
import MyProject from "./components/myProject";
import Card from "./components/cards";
import GetInTouch from "./components/getInTouch";

// Not found component
import Error from "./components/NotFound";

const routers = createBrowserRouter([
    {
      path: "*",
      element: <Base>
                <Error
                  code={404}
                  description="Oops! The page you're looking for doesn't exist."
                />
               </Base>
    }
    ,
    { path: '/',
      element: <Base>
                    <HeroSection
                        name="Ukaegbu Ndukwe"
                        description={`Software Engineer specializing in web development with \n Python, JavaScript, DynamoDb and AWS`}
                        skills={['Django', 'Flask', 'FastAPI' ,'Node.js', 'Docker', 'SQL', 'MongoDb', 'Nginx']}
                        cvUrl={"https://drive.google.com/file/d/1V_ICSaEzyY5wsscPebD2TF1sZb4YgDiU/view?usp=sharing"}
                    />
                </Base>
    },
    { path: '/about-me',
      element: <Base>
                    <AboutMe
                        fullName={"Ukaegbu Ndukwe"}
                        country={"nigeria"}
                        email={'n.u.kingsley@gmail.com'}
                        profession={"Software Engineer"}
                        cvUrl={"https://drive.google.com/file/d/1V_ICSaEzyY5wsscPebD2TF1sZb4YgDiU/view?usp=sharing"}
                        title="Software Engineer & Research Scientist"
                        aboutMeExpertise="With expertise in Python, JavaScript, AWS, and database technologies like SQL, DynamoDB and MongoDB, I enjoy tackling complex problems and transforming them into elegant solutions. I'm particularly interested in cloud architecture, containerization, and building performant web applications."
                        aboutMeInfo="I'm a passionate Software Engineer with extensive experience in building robust web applications and systems. My journey in technology started with a deep curiosity about how things work, which evolved into a career focused on creating efficient, scalable, and user-centered solutions."
                        image={'/photo5.jpg'}
                    />
                </Base>
    },
    {
      path: '/skills',
      element: <Base>
                    <Skills
                    description={`I've gained expertise in a variety of technologies throughout my career. Here's an overview of my technical \n skills and proficiency levels.`}
                    skills={[
                        {skill: "Python", progress: 90},
                        {skill: "SQL", progress: 80},
                        {skill: "Docker", progress: 70},
                        {skill: "C", progress: 60},
                        {skill: "DynamoDB", progress: 65},
                        {skill: "Linux", progress: 65},
                    ]}
                    extraSkills={[
                        {skill: "JavaScript", progress: 85},
                        {skill: "AWS", progress: 70},
                        {skill: "MongoDB", progress: 80},
                        {skill: "NGINX", progress: 85},
                        {skill: "Git", progress: 85},
                        {skill: "TypeScript", progress: 75},
                    ]}
                    
                    />
                </Base>
    },
    {
      path: "/projects",
      element: <Base>
            <MyProject 
                githubUrl={"https://github.com/iamukn/"}
                description={"Here are some of the projects I've worked on. These represent my skills, problem-solving approach, and the\n technologies I've mastered."}
            >

                    <Card 
                    title="Personal Portfolio Website"
                    description="A responsive, mobile-friendly portfolio website built to showcase my skills, projects, and experience."
                    technology={["React", "TypeScript", "Vite"]}
                    githubUrl={"https://github.com/iamukn/portfolio-website"}
                    imageUrl='/portfolio.jpeg'
                />
                <Card
                    title='Parcel Tracking App'
                    description='Real-time parcel tracking web application, fostering easy parcel delivery with tracking numbers.'
                    technology={["Django", "Celery", "PostgreSQL", "Redis", "Docker"]}
                    githubUrl='https://github.com/iamukn/Trackerr1.1'
                    imageUrl='/photo3.png'
                />
                <Card
                    title={"Indiegogo–Shopify Perk Sync"}
                    description={'Automation tool that syncs Indiegogo campaign perks with Shopify, streamlining order fulfillment.'}
                    technology={["Python", "SQL", "Flask", "Shopify", "Indiegogo"]}
                    githubUrl={'https://github.com/iamukn/indiegogo-shopify-sync'}
                    imageUrl={'/photo4.jpg'}
                />
                <Card
                    title='Ecolite Liberia'
                    description='Backend of a waste management system for Ecolite in Liberia, enabling users to schedule pickups.'
                    technology={["Python", "Flask", "MongoDB", "SQL", "Celery"]}
                    githubUrl='#'
                    imageUrl='/photo2.png'
                />
                <Card
                    title={"Pdf to Docx Convert"}
                    description={"A full-stack pdf to docx document converter platform with realtime weather update."}
                    technology={["Python", "JavaScript", "SQL", "Flask", "Gunicorn"]}
                    githubUrl={"https://github.com/iamukn/Pdf-converter"}
                    imageUrl={"/photo1.jpg"}
                />
            </MyProject>
      
      </Base>
    },
    {
      path: '/get-in-touch',
      element: <Base>
                    <GetInTouch
                        emailAddr={"n.u.kingsley@gmail.com"}
                        phone={'+2347037676797'}
                        location={'Abuja, Nigeria'}
                        github={'https://github.com/iamukn/'}
                        linkedin={"https://linkedin.com/in/iamukn/"}
                        twitter={"https://x.com/iam_ukn/"}
                        description={"Feel free to reach out to me for collaborations, opportunities, or just to say hello!"}
                    />
                </Base>
    }
]);


export default routers;