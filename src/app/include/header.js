import HeaderCss from '../../assets/css/styleHeader.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const isLoggedIn = props.isLoggedIn;

    const handleLogout = () => {
        props.logoutUser();
    };
    return (
        <header className={HeaderCss.container}>
            <div className={HeaderCss.nameS}>
                <h1 className={HeaderCss.H1Name}>
                    <NavLink className={HeaderCss.nameMySite} to="/../../pages/first_page/first_page.js">ГеоСпот</NavLink>
                </h1>
            </div>
            <nav className={HeaderCss.nameCon}>
                <ul>
                    <li><NavLink className={HeaderCss.item} to="/../../pages/first_page/first_page.js">Новости</NavLink></li>
                    <li><NavLink className={HeaderCss.item} to="/../../pages/events/events.js">Мероприятия</NavLink></li>
                    {isLoggedIn ? (
                        <li>
                            <button className={HeaderCss.item} onClick={handleLogout}>Выход</button>
                        </li>
                    ) : (
                        <li>
                            <NavLink className={HeaderCss.item}
                                     to="/../../pages/authorization/Authorization.js">Вход</NavLink>
                        </li>
            )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;