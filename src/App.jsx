import Home from "./pages/home/Home";
import Tables from "./pages/tables/Tables";
import Billing from "./pages/billing/Billing";
import Profile from "./pages/profile/Profile";
import NavBar from "./components/navbar/NavBar";
import Menu from "./components/menu/Menu";  
import Footer from "./components/footer/Footer";    
import style from "./styles/global.module.scss";

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const App = () => { 
    const Leyout = () => { 
        return (
            <div className={style.main}>
               <div className={style.mainContecnt}>
                    <NavBar/>
                    <div className={style.container}>
                        <div className={style.menuContainer}>
                            <Menu/>
                        </div>
                        <div className="contentContainer">
                            <Outlet/>
                        </div>
                    </div>
               </div>
                <Footer/>
            </div>
        )
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: (<Leyout/>),
            children:[
                    {
                        path:"/",
                        element:(<Home/>)
                    },
                    {
                        path:"/tables",
                        element:(<Tables/>)
                    },   
                    {
                        path:"/billing",
                        element:(<Billing/>)
                    },    
                    {
                        path:"/profile",
                        element:(<Profile/>)
                    },   
                ]}
      ]);


      return <RouterProvider router={router}/>

}; 


export default App
