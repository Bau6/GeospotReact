import React from "react";
import eventCss from "./event.module.css";
import {NavLink} from "react-router-dom";
import myImage from '../../app/images/icone.png';

class Event extends React.Component {
    render() {


        return (
            <div>
                <div className={eventCss.containerEvent}>
                    <div className={eventCss.row}>
                        {/*<h1>Описание спортивного мероприятия</h1>*/}
                        <div className={eventCss.col}>
                            <div className={eventCss.companyDetails}>
                                <div className={eventCss.titleAndInfo} id="scroll">
                                    <div className={eventCss.title}>
                                        <div className={eventCss.thumb}>
                                            <img src={myImage} className={eventCss.imgFluid} alt=""/>
                                        </div>
                                        <div className="title-body">
                                            <a href=""><h4>FFT&nbsp;BT200</h4></a>
                                            <div className="info">
                                                <span>FFT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={eventCss.paddingTop60}>
                                    <div className={eventCss.row}>
                                        <div className={eventCss.colXl7}>
                                            <div className={eventCss.detailsSection}>
                                                <h4>
                                                    <svg xmlns="" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         className="feather feather-align-left">
                                                        <line x1="17" y1="10" x2="3" y2="10"></line>
                                                        <line x1="21" y1="6" x2="3" y2="6"></line>
                                                        <line x1="21" y1="14" x2="3" y2="14"></line>
                                                        <line x1="17" y1="18" x2="3" y2="18"></line>
                                                    </svg>
                                                    Description
                                                </h4>
                                                <div className="tournament-desc">
                                                    <p><span>- 1/64èmes, 1/32èmes, 1/16èmes et matchs de classement le samedi 4 mai au soir.</span><br/>
                                                    </p><p>- 1/8èmes (8 têtes de série) et fin du tournoi et classement
                                                    dimanche matin à partir de 8H, avant les finales de l'ITF (14H).</p>
                                                    <p>- Repas et bar sur place.</p><p>- Filet à 1m70, balles sandever,
                                                    matchs de classement.</p></div>
                                            </div>
                                        </div>
                                        <div className={eventCss.colLg4}>
                                            <div className={eventCss.information}>

                                                    <h4>Info</h4>
                                                    <ul>
                                                        <li><span>Start date:</span>04/05/2024 08:00</li>
                                                        <li><span>Entry fee:</span>40.00EUR</li>
                                                        <li><span>Location:</span>Sainte-Clotilde, 41 bis rue Gabriel de
                                                            Kerveguen
                                                        </li>
                                                        ģ
                                                        <li><span>Entry deadline:</span> 28/04/2024 20:00</li>
                                                        <li><span>Withdrawal deadline:</span> 28/04/2024 20:00</li>
                                                        <li><span>Categories:</span> DMXD [BT200]</li>
                                                        <li className="tournament-contact">
                                                            <span>Organizer:</span>
                                                            <a href="">Beach Park Dionysien</a>
                                                            <a href="">
                                                            <svg xmlns="" width="24"
                                                                 height="24" viewBox="0 0 24 24" fill="none"
                                                                 className="feather feather-phone">
                                                                <path
                                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                            </svg></a>
                                                            <a href="">
                                                                <svg xmlns="" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     className="feather feather-mail">
                                                                    <path
                                                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                                    <polyline points="22,6 12,13 2,6"></polyline>
                                                                </svg>
                                                            </a></li>
                                                        <a href="">
                                                        </a>
                                                    </ul>

                                                <div className={eventCss.jobLocation}>
                                                    <h4>Location</h4>
                                                    <LocationMap />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                </div>
                            </div>
                        </div>
                </div>
                <NavLink to="/../../pages/resultsTourney/resultsTourney.js">Результаты</NavLink>
                <button onClick={this.handleRegistrationClick}>Зарегистрироваться на турнир</button>
                <NavLink to="/../../pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js">Просмотр
                    участников</NavLink>
                <NavLink to="/../../pages/events/events.js">Назад</NavLink>
            </div>
        );
    }
}

export default Event;
export const LocationMap = () => {
    const srcLocation1 = "30.251109";
    const srcLocation2 = "59.909346";
    return (
        <div id="map-area">
            <iframe width="100%" height="auto"
                    src={`https://yandex.ru/map-widget/v1/?um=/?ll=${srcLocation1},${srcLocation2};source=constructor&pt=${srcLocation1},${srcLocation2}`}>
            </iframe>
        </div>
    );
};