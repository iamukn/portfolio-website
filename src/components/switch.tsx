

export default function Switch ({children}: any) { 
  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
    const cards = document.getElementsByClassName('card')
    const formCtn = document.getElementsByClassName('form-ctn')[0] as HTMLElement;
    const techList = document.getElementsByClassName('tech-list');

    
  for (let i = 0; i < techList.length; i++) {
      (techList[i] as HTMLElement).style.color = 'whitesmoke';
    }
    
    



  formCtn.classList.toggle('form-ctn-toggle');

  for (let i = 0; i < cards.length; i++) {
      cards[i].classList.toggle("bright-border");
    }
    
  };
    return <div className="switch">
        <span onClick={toggleTheme} style={{ cursor: "pointer" }}>
            {children}
        </span>
    </div>
}
