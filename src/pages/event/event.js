import React from "react";
import eventCss from "./event.module.css";
import button from "../../assets/css/button.module.css";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";
import {NavLink} from "react-router-dom";

class Event extends React.Component {
    componentDidMount() {
        // const urlParams = new URLSearchParams(window.location.search);
        // const id = urlParams.get(`id`);
        this.props.loadEvent(this.props.eventId);
        console.log(this.props)
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
    handleRegistrationTourney(){
        alert("Вы успешно зарегистрированы!");
    }
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
                                            <a href=""><h4>{this.props.event.nameEvent}&nbsp;</h4></a>
                                            <div className="info">
                                                &nbsp;<button className={button.buttonsInfo} onClick={()=>{this.handleRegistrationTourney()}}>Зарегистрироваться на турнир</button>
                                                <NavLink to={`/../pages/resultsTourney/resultsTourney.js`}>
                                                    <button className={button.buttonsInfo}>Результаты</button>
                                                </NavLink>
                                                <NavLink to={`/../pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js`}>
                                                    <button className={button.buttonsInfo}>Просмотр участников</button>
                                                </NavLink>
                                                <NavLink to={`/../pages/events/events.js`}>
                                                    <button className={button.buttonsInfo}>Назад</button>
                                                </NavLink>
                                                {/*<button className={eventCss.buttonsInfo} onClick={()=>{this.handleResults()}} >Результаты</button>&nbsp;*/}
                                                {/*<button className={eventCss.buttonsInfo} onClick={()=>{this.handlePlayers()}} >Просмотр участников</button>&nbsp;*/}
                                                {/*<button className={eventCss.buttonsInfo} onClick={()=>{this.handleBack()}}>Назад</button>&nbsp;*/}
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
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                        <line x1="17" y1="10" x2="3" y2="10"></line>
                                                        <line x1="21" y1="6" x2="3" y2="6"></line>
                                                        <line x1="21" y1="14" x2="3" y2="14"></line>
                                                        <line x1="17" y1="18" x2="3" y2="18"></line>
                                                    </svg>
                                                    Описание мероприятия
                                                </h4>
                                                <div>
                                                    <p><span>{this.props.event.descriptionEvent}</span><br/></p></div>
                                            </div>
                                        </div>
                                        <div className={`${eventCss.colLg4} ${eventCss.information}`}>
                                            <div>
                                                <h4>Информация</h4>
                                                <ul>
                                                    <li>
                                                        <span>Дата начала:&nbsp;</span>{this.props.event.dateStart ? dateStrISO(this.props.event.dateStart, DATE_FORMAT_DATE) : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Дата окончания:&nbsp;</span>{this.props.event.dateFinish ? dateStrISO(this.props.event.dateFinish, DATE_FORMAT_DATE) : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Местоположение:&nbsp;{this.props.event.country ? this.props.event.country : ""} {this.props.event.city ? this.props.event.city : ""}
                                                        </span>
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Вид спорта:&nbsp;{this.props.event.sport ? this.props.event.sport : ""}&nbsp;
                                                        </span>
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Пол:&nbsp;{this.props.event.gender ? this.props.event.gender : ""}</span>
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Возраст от:&nbsp;</span>{this.props.event.minAge ? this.props.event.minAge : ""}
                                                    </li>
                                                    <li>
                                                        <span> &nbsp;до:&nbsp;</span>{this.props.event.maxAge ? this.props.event.maxAge : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Число игроков:&nbsp;</span>{this.props.event.cntPlayersInGroup ? this.props.event.cntPlayersInGroup : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Организатор:&nbsp;</span>{this.props.event.orgName ? this.props.event.orgName : ""}
                                                    </li>
                                                    <br/>
                                                    <br/>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Местоположение на карте</h4>
                                                <this.LocationMap/>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        } else {
            return <div>Страница не найдена!</div>;
        }
    }
}

export default Event;