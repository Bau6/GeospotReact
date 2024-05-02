import React from "react";
import eventCss from "./event.module.css";
import {NavLink} from "react-router-dom";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get(`id`);
        this.props.loadEvent(id);
    }

    LocationMap () {
        const srcLocation1 = "30.251109";
        const srcLocation2 = "59.909346";
        return (
            <div id="map-area">
                <iframe width="100%" height="auto" title="Карта с местоположением"
                        src={`https://yandex.ru/map-widget/v1/?um=/?ll=${srcLocation1},${srcLocation2};source=constructor&pt=${srcLocation1},${srcLocation2}`}>
                </iframe>
            </div>
        );
    };
    render() {
        if (!!this.props.event) {
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
                                            <img src={this.props.myImage} className={eventCss.imgFluid} alt=""/>
                                        </div>
                                        <div className="title-body">
                                            <a href=""><h4>{this.props.event.id}&nbsp;</h4></a>
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
                                                    Описание мероприятия
                                                </h4>
                                                <div className="tournament-desc">
                                                    <p><span>{this.props.event.descriptionEvent}</span><br/></p></div>
                                            </div>
                                        </div>
                                        <div className={eventCss.colLg4}>
                                            <div className={eventCss.information}>

                                                    <h4>Информация</h4>
                                                    <ul>
                                                        <li><span>Дата начала:</span>{this.props.event.dateStart ? dateStrISO(this.props.event.dateStart, DATE_FORMAT_DATE) : ""}</li>
                                                        <li><span>Дата окончания:</span>{this.props.event.dateFinish ? dateStrISO(this.props.event.dateStart, DATE_FORMAT_DATE) : ""}</li>
                                                        <li><span>Местоположение:</span>Sainte-Clotilde, 41 bis rue Gabriel de
                                                            Kerveguen
                                                        </li>
                                                        <li><span>Спорт:</span> DMXD [BT200]</li>
                                                        <li className="tournament-contact">
                                                            <span>Организатор:</span>
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
                                                    <h4>Местоположение на карте</h4>
                                                    <this.LocationMap />
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
        } else {
            return <div>Страница не найдена!</div>;
        }
    }
}

export default Event;