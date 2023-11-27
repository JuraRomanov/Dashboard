import style from "./menu.module.scss"
import './search.css'
const Menu = () => { 
    return(
        <div className={style.menu}>
            <div className={style.namePageSection}>
                <span className={style.road}>Pages <span> / Dashborad</span></span>
                <span className={style.currentPage}>Dashborad</span>

            </div>
            <div className={style.userSection}>
                <div className={style.box}>
                    <div className="container-1">
                        <img src="/seacrh.svg" alt="" className="icon"/> 
                        <input type="search" id="search" placeholder="Search..." />
                    </div>
                </div>
                <div className={style.userBox}>
                    <div className={style.personSection}>
                        <img src="./persone.svg" alt="" />
                        <span>SingIn</span>
                    </div>
                    <img src="./sharp.svg" alt="" />
                    <img src="./bell.svg" alt="" />
                </div>
            </div>
        </div>
    )
} 




export default Menu ; 