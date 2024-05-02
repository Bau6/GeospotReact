import React from "react";
import eventCss from "./event.module.css";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";

class Event extends React.Component {
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
    handleRegistrationTourney(){
        alert("Вы успешно зарегистрированы!");
    }
    handleBack(){
        window.location.href="/../../pages/events/events.js";
    }
    handlePlayers(){
        window.location.href="/../../pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js";
    }
    handleResults(){
        window.location.href="/../../pages/resultsTourney/resultsTourney.js";
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
                                                <button className={eventCss.buttonsInfo} onClick={()=>{this.handleRegistrationTourney()}}>Зарегистрироваться на турнир</button>&nbsp;
                                                <button className={eventCss.buttonsInfo} onClick={()=>{this.handleResults()}} >Результаты</button>&nbsp;
                                                <button className={eventCss.buttonsInfo} onClick={()=>{this.handlePlayers()}} >Просмотр
                                                    участников</button>&nbsp;
                                                <button className={eventCss.buttonsInfo} onClick={()=>{this.handleBack()}}>Назад</button>&nbsp;
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
                                        <div className={eventCss.colLg4}>
                                            <div className={eventCss.information}>

                                                    <h4>Информация</h4>
                                                <ul>
                                                    <li>
                                                        <span>Дата начала:</span>{this.props.event.dateStart ? dateStrISO(this.props.event.dateStart, DATE_FORMAT_DATE) : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Дата окончания:</span>{this.props.event.dateFinish ? dateStrISO(this.props.event.dateFinish, DATE_FORMAT_DATE) : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Местоположение:</span>{this.props.event.country ? this.props.event.country : ""} {this.props.event.city ? this.props.event.city : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Спорт:</span>{this.props.event.sportTypeID ? this.props.event.sportTypeID : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Пол:</span>{this.props.event.gender ? this.props.event.gender : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Возраст от:</span>{this.props.event.minAge ? this.props.event.minAge : ""}
                                                    </li>
                                                    <li>
                                                        <span> до:</span>{this.props.event.maxAge ? this.props.event.maxAge : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Число игроков:</span>{this.props.event.cntPlayersInGroup ? this.props.event.cntPlayersInGroup : ""}
                                                    </li>
                                                    <br/>
                                                    <li>
                                                        <span>Организатор:</span>{this.props.event.orgID ? this.props.event.orgID : ""}
                                                    </li>
                                                    <br/>
                                                    <br/>
                                                </ul>

                                                <div className={eventCss.jobLocation}>
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
            </div>
        );
        } else {
            return <div>Страница не найдена!</div>;
        }
    }
}

export default Event;