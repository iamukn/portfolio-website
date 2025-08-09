import { useEffect, useState } from "react"

export default function Switch ({children}: any) { 
  const [lightMode, setLightMode] = useState(false);


  useEffect(()=>{
    document.body.classList.toggle("light-mode", lightMode);
    const formCtn = document.querySelector(".form-ctn");
    const cards = document.querySelectorAll(".card");
    const techList = document.querySelectorAll(".tech-list");

    if (formCtn) {
      formCtn.classList.toggle("form-ctn-toggle", lightMode);
    }

    cards.forEach((card) => {
      card.classList.toggle("bright-border", lightMode);
    });

    techList.forEach((tech) => {
      (tech as HTMLElement).style.color = lightMode ? "whitesmoke" : "";
    });

  }, [lightMode])

    return <div className="switch">
        <span className="bulb" onClick={()=>setLightMode(!lightMode)} style={{ cursor: "pointer" }}>
            {children}
        </span>
    </div>
}
