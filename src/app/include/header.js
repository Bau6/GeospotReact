import HeaderCss from '../../assets/css/styleHeader.module.css';
import {NavLink} from "react-router-dom";
import eventCss from "../../pages/event/event.module.css";
import React from "react";
const Header = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const handleLogout = () => {
        props.clearNews();
        props.clearEvents();
        props.logoutUser();
        props.clearSession();
        props.clearSessionUsers();
        window.location.href = "/../../pages/first_page/first_page.js";
    };
    const handleProfile = () => {
        props.clearNews();
        props.clearEvents();
        window.location.href = "/../../pages/profile/ProfilePage.js";
    }

    const handleNews = () => {
        if (window.location == 'http://localhost:3000/pages/first_page/first_page.js'){window.location.reload();}
        // props.clearNews();
        props.clearEvents();
        window.location.href = "/../../pages/first_page/first_page.js";
    }

    const handleEvents = () => {
        props.clearNews();
        if (window.location == 'http://localhost:3000/pages/events/events.js'){window.location.reload();}
        // alert(window.location)
        // window.location.reload();
        // props.clearEvents();
        // if (window.location == 'http://localhost:3000/pages/events/events.js'){window.location.reload();}
        window.location.href = "/../../pages/events/events.js";
    }
    const handleLogin = () => {
        props.clearNews();
        props.clearEvents();
    }

    return (
        <header className={HeaderCss.container}>

            <nav className={HeaderCss.nameCon}>
                <ul>
                    <div className={HeaderCss.nameS}>
                        <img src={props.myImage} className={HeaderCss.imgFluid} alt=""/>
                        <h1 className={HeaderCss.H1Name}>
                            <NavLink onClick={handleNews} className={HeaderCss.nameMySite}
                                     to="/../../pages/first_page/first_page.js">ГеоСпот</NavLink>
                        </h1>
                    </div>
                    {/*</li>*/}
                    <li><NavLink onClick={handleNews} className={HeaderCss.item}
                                 to="/../../pages/first_page/first_page.js">Новости</NavLink>
                    </li>
                    <li><NavLink onClick={handleEvents} className={HeaderCss.item} to="/../../pages/events/events.js">Мероприятия</NavLink></li>
                    {isLoggedIn ? (
                        <li className={HeaderCss.dropdown}>
                            <div onClick={handleProfile} className={HeaderCss.itemProfile}>{props.user.name}</div>
                            <div className={HeaderCss.dropdownContent}>
                                <div onClick={handleLogout}>Выход</div>
                            </div>
                        </li>
                    ) : (
                        <li>
                            <NavLink onClick={handleLogin} className={HeaderCss.itemProfile}
                                     to="/../../pages/authorization/Authorization.js">Вход</NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
export default Header;