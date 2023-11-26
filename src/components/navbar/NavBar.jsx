import style from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { navbarPage } from "../../data"; 

const navBar  = () => {
    return ( 
        <div className={style.navbar}>
            <div className={style.nameSection}>
                Dashboard
            </div>  
           
          
           

            <div className={style.pageSection}>
            {
            navbarPage.map((el) => (
                
                    <Link to = {el.url} className={style.item} key ={el.id}>
                        <img src={el.icon} alt="" className={style.logo} />
                        <span className={style.title}>{el.title}</span>
                    </Link>
                
            ))
           }
            </div>
        </div>
    );
};

export default navBar; 