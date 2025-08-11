import './style.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from './components/navBar';
import Footer from './components/footer';
import { Outlet, RouterProvider } from 'react-router-dom';
import routers from './routes';



const root = document.getElementById("app");

// type BaseProps = {
//   children: React.ReactNode
// }

export default function Base () {

  return <StrictMode>
    <div className="app-wrapper">
      <NavBar/>
      {/* {children} */}
      <Outlet />
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