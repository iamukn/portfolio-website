import {faArrowDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AboutMeProps = {
    fullName : string,
    country: string,
    email: string, 
    profession: string,
    image: string,
    cvUrl: string,
    title: string,
    aboutMeInfo: string
    aboutMeExpertise: string
}

export default function AboutMe ({fullName, title, country, email, profession, image, cvUrl, aboutMeInfo, aboutMeExpertise}: AboutMeProps) {
    return <section className="flex-col-center about-me">
        <FontAwesomeIcon icon={faArrowDown} size="lg" color="#88B0F2" className="arrow" />
        <h3>About Me</h3>
        <div className='div-border'></div>
        <div className='about-me-container flex-row-center'>
            <div className='about-me-img-container'>
                <img className="photo" src={image} alt={`photo of ${fullName}`} />
            </div>
            <div className='about-me-info-container'>
                <h3>{title}</h3>  
                <p className='bio-info'>{aboutMeInfo}</p>    
                <p className='bio-info'>{aboutMeExpertise}</p>
                <div className='flex about-me-contact-info'>
                    <div>
                        <h4 className='h-info'>Name:</h4>
                        {fullName ? <p className='p-info'>{fullName}</p> : <p className='p-info'>FirstName LastName</p>}
                        <h4 className='h-info'>From:</h4>
                        {country? <p className='p-info'>{country.charAt(0).toUpperCase() + country.slice(1)}</p>: <p className='p-info'>Country</p>}
                        <a href={cvUrl} target='_blank' className='download-cv-btn'>Download CV</a>
                    </div>
                    <div>
                        <h5 className='h-info'>Email:</h5>
                        {email? <p className='p-info'><a href={`mailto:${email}`}>{email}</a></p>:<p className='p-info'><a href="mailto:johndoe@example.com">johndoe@example.com</a></p>}
                        <h5 className='h-info'>Profession:</h5>
                        {profession? <p className='p-info'>{profession.charAt(0).toUpperCase() + profession.slice(1)}</p>:<p className='p-info'>Software Engineer</p>}
                    </div>
                </div>   
            </div>
        </div>

    </section>
}