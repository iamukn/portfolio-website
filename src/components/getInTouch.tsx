import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'; 
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type myProjectProps = {
    description: string
    emailAddr: string
    phone: string
    location: string
    github: string
    linkedin: string
    twitter: string
    ref: React.RefObject<HTMLDivElement>
}

export default function GetInTouch({description, emailAddr, phone, location, github, linkedin, twitter, ref}: myProjectProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [display, setDisplay] = useState(true)

    // email, name, subject and message ref

    const form = useRef<any>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const subjectRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sendEmailRef = useRef<number | null>(null);
    function handleSubmit (e:any) {
        e.preventDefault();
        if (!email) {
            emailRef.current!.focus();
         }
          else if (!regex.test(email)) {
            emailRef.current!.focus();
        } else if (!name) {
            nameRef.current!.focus()
        } else if (!subject) {
            subjectRef.current!.focus()
        } else if (!message) {
            messageRef.current!.focus()
        } else {
        setDisplay(false)
        submitEmail();
        }
    }

function submitEmail () {
    console.log('Will send email in 5 seconds')
    sendEmailRef.current = setTimeout(() => {
        console.log('Sending Email')

            emailjs.sendForm(
                'service_ukn',      
                'template_ukn',   
                form.current,
                'j8XJYsxEUkX47Ufll'
                ).then(
                (result) => {
                    console.log(result)
                    alert('✅ Email sent: UKN will get back to you shortly👌');
                },
                (error) => {
                    console.log('❌ Failed to send email:', error.text);
                }
                );

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setDisplay(true)
        }, 5000);
}

  function cancelEmail() {
    if (sendEmailRef.current) {
      clearTimeout(sendEmailRef.current);
      sendEmailRef.current = null;
      console.log('❌ Email sending cancelled.');
      setTimeout(()=>{
        setDisplay(true);
      }, 1000)
    }
  }

    return <section className="flex-col-center get-in-touch-ctn" ref={ref}>
    
    <h5>Get In Touch</h5>
    <div className='div-border' id="skills-border-bottom"></div>
    <p className="bio-info" style={{ whiteSpace: "pre-line", textAlign:"center" }}>
        {description}
    </p>
    <div className="flex contact-info-ctn">
        <div className="flex column margin">
            <div style={{width: "100%"}}>
                <h3>Contact Information</h3>
            </div>
            <div className='flex column'>
                <div className="flex margin-bt width">
                    <div className='flex'>
                        <div className='flex-col-center icon-style'>
                            <FontAwesomeIcon icon={faEnvelope as IconProp} size={"1x"} color={"#2E5AAC"}/>
                        </div>
                        <div className="flex column bio">
                            <h3>Email:</h3>
                            <p>{emailAddr}</p>
                        </div>
                    </div>
                </div>
                <div className="flex margin-bt width">
                    <div className='flex'>
                        <div className='flex-col-center icon-style'>
                            <FontAwesomeIcon icon={faPhone as IconProp} size={"1x"} color={"#2E5AAC"}/>
                        </div>
                        <div className="flex column bio">
                            <h3>Phone:</h3>
                            <p>{phone}</p>
                        </div>
                    </div>
                </div>
                <div className="flex margin-bt width">
                    <div className='flex'>
                        <div className='flex-col-center icon-style'>
                            <FontAwesomeIcon icon={faLocationPinLock as IconProp} size={"1x"} color={"#2E5AAC"}/>
                        </div>
                        <div className="flex column bio">
                            <h3>Location:</h3>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socials">
                <div className='social'>
                    <h3>Social Profiles</h3>
                    <div className='flex github-linkedin'>
                      <a href={github} target='_blank'>
                        <div className="icon-style flex-col-center hover link-redirect">
                            <FontAwesomeIcon icon={faGithub as IconProp} size={"1x"} color={"#2E5AAC"}/>
                        </div>
                      </a>
                      <a href={linkedin} target='_blank'>
                        <div className="icon-style flex-col-center hover  link-redirect">
                            <FontAwesomeIcon icon={faLinkedinIn as IconProp} size={"1x"} color={"#2E5AAC"}/>
                        </div>
                      </a>
                      <a href={twitter} target='_blank'>
                        <div className="icon-style flex-col-center hover  link-redirect">
                            <FontAwesomeIcon icon={faTwitter as IconProp} size={"1x"} color={"#2E5AAC"}/>
                        </div>
                      </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex form-ctn">
            <form ref={form} className='width-100 ' onSubmit={handleSubmit}>
                <div style={{width: "95%"}} className='flex'>
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <label htmlFor="name">
                            Name </label>
                            <input 
                            type='text'
                            id='name'
                            name='name'
                            value={name}
                            ref={nameRef}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="John Doe"
                            className="form-label"
                        />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <label htmlFor="email" >
                            Email <br/> </label>
                            <input type="text"
                            id='email'
                            name='email'
                            value={email}
                            ref={emailRef}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder='johndoe@example.com'
                            className="form-label"
                            />
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <label htmlFor="subject">
                        Subject </label>
                        <input type="text"
                        id='subject'
                        name='subject'
                        value={subject}
                        ref={subjectRef}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder='Subject'
                        className="form-label"
                        />
                </div>
                <label htmlFor="message" style={{display:"inline-block"}} className='textarea-label form-label'>
                    Message <br/></label>
                    <textarea
                        id='message'
                        name="message"
                        placeholder='Please type your message here...'
                        // style={{width: "25rem", height: "10rem"}}
                        value={message}
                        ref={messageRef}
                        onChange={(e) => setMessage(e.target.value)}
                    />                
                {
                    display? <button 
                    type='submit'
                    className='submit-btn'
                    style={{display: "block"}}   
                    disabled={!email || !name || !subject || !message}   
                    >
                        Submit
                </button> :
                <button 
                    type='button'
                    className='submit-btn'
                    style={{display: "block"}}
                    disabled={!email || !name || !subject || !message}  
                    onClick={cancelEmail}    
                    >
                        Undo
                </button>
                }
            </form>
        </div>
    </div>
</section>
}