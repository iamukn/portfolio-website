import './style.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from './components/navBar';
import Footer from './components/footer';
import { RouterProvider } from 'react-router-dom';
import routers from './routes';



const root = document.getElementById("app");

type BaseProps = {
  children: React.ReactNode
}

export default function Base ({children}: BaseProps) {

  return <StrictMode>
    <div className="app-wrapper">
      <NavBar/>
      {children}
      <Footer
        name='Ukaegbu Ndukwe'
      />
    </div>
    </StrictMode>
}


if (root) {
  const createRootElement = createRoot(root);
  createRootElement.render(  
    <RouterProvider router={routers} />
  )
}