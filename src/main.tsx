import './style.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from './components/navBar';
import HeroSection from './components/heroSection';
import AboutMe from './components/aboutMe';
import Skills from './components/skills'
import MyProject from './components/myProject';
import GetInTouch from './components/getInTouch';
import Card from './components/cards';
import Footer from './components/footer';
import { useRef } from 'react';



const root = document.getElementById("app");

function App () {
  const myWorkRef = useRef<any>(null);
  const contactMeRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const homeRef = useRef<any>(null);

  return <StrictMode>
    <div className="app-wrapper">
      <NavBar
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        myWorkRef={myWorkRef}
        contactMeRef={contactMeRef}
      />
      <HeroSection 
        name="Ukaegbu Ndukwe"
        myWorkRef={myWorkRef}
        contactMeRef={contactMeRef}
        ref={homeRef}
        description={`Software Engineer specializing in web development with \n Python, JavaScript, DynamoDb and AWS`}
        skills={['Django', 'Flask', 'FastAPI' ,'Node.js', 'Docker', 'SQL', 'MongoDb', 'Nginx']}
      />
      <AboutMe
        fullName={"Ukaegbu Ndukwe"}
        country={"nigeria"}
        email={'kingsley@voltacharger.com'}
        profession={"Software Engineer"}
        ref={aboutRef}
        title="Software Engineer & Research Scientist"
        image={'/photo5.jpg'}
        cvUrl={"https://drive.google.com/file/d/13ieAJGuHhm5t-ARm-Edq9_DVYvqEtC9b/view?usp=drivesdk"}
      />
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
       ref={skillsRef}
      />

      < MyProject
        githubUrl={"https://github.com/iamukn/"}
        ref={myWorkRef}
        description={"Here are some of the projects I've worked on. These represent my skills, problem-solving approach, and the\n technologies I've mastered."}
      >
      <Card 
        title="Personal Portfolio Website"
        description="A responsive, mobile-friendly portfolio website built to showcase my skills, projects, and experience."
        technology={["React", "TypeScript", "Vite"]}
        githubUrl={"#"}
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

      <GetInTouch
        emailAddr={"kingsley@voltacharger.com"}
        phone={'+2347037676797'}
        location={'Abuja, Nigeria'}
        github={'https://github.com/iamukn/'}
        linkedin={"https://linkedin.com/in/iamukn/"}
        twitter={"https://x.com/iam_ukn/"}
        ref={contactMeRef}
        description={"Feel free to reach out to me for collaborations, opportunities, or just to say hello!"}
      />

      <Footer
        name='Ukaegbu Ndukwe'
      />
    </div>
    </StrictMode>
}


if (root) {
  const createRootElement = createRoot(root);
  createRootElement.render(    
    <App />
  )
}