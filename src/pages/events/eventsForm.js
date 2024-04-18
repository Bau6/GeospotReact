import EventsFormCss from "./eventsForm.module.css";
// import AuthorizationCss from "../authorization/AuthorizationCss.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import axios from "axios";

const TABLE = "events";

class EventsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            thisEventsTest: {}
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3003/output-table', {
            params: {
                nameTable: TABLE,
                params: {}
            }
        })
            .then(response => {
                let updatedEvents = [...response.data];

                let userPromises = updatedEvents.filter(event => event.orgID).map(event => {
                    return axios.get('http://localhost:3003/output-one-record', {
                        params: {
                            nameTable: "users",
                            params: event.orgID
                        }
                    })
                        .then(response => {
                            event.orgName = response.data.surname + " " + response.data.name + " " + response.data.patronymic;
                        })
                        .catch(error => {
                            console.log(error);
                        });
                });

                let sportTypePromises = updatedEvents.filter(event => event.sportTypeID).map(event => {
                    return axios.get('http://localhost:3003/output-one-record', {
                        params: {
                            nameTable: "sporttype",
                            params: event.sportTypeID
                        }
                    })
                        .then(response => {
                            event.sportTypeID = response.data.name;
                        })
                        .catch(error => {
                            console.log(error);
                        });
                });

                let cityPromises = updatedEvents.filter(event => event.city).map(event => {
                    return axios.get('http://localhost:3003/output-one-record', {
                        params: {
                            nameTable: "cities",
                            params: event.city
                        }
                    })
                        .then(response => {
                            event.city = response.data.city;
                        })
                        .catch(error => {
                            console.log(error);
                        });
                });

                let countryPromises = updatedEvents.filter(event => event.country).map(event => {
                    return axios.get('http://localhost:3003/output-one-record', {
                        params: {
                            nameTable: "countries",
                            params: event.country
                        }
                    })
                        .then(response => {
                            event.country = response.data.country;
                        })
                        .catch(error => {
                            console.log(error);
                        });
                });

                Promise.all([...userPromises, ...sportTypePromises, ...countryPromises, cityPromises]).then(() => {
                    this.setState({ isLoading: false, thisEventsTest: updatedEvents });
                    this.props.loadEvents(updatedEvents);
                    console.log(updatedEvents);
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        return (
            <div>
                {/* Проверяем наличие thisEvents и его длину */}
                {this.props.thisEvents && this.props.thisEvents.length > 0 ? (
                    // Используем map для вывода каждого объекта
                    this.props.thisEvents.map(event => (
                        <div  className={EventsFormCss.events}>
                            <div key={event.eventID} className={EventsFormCss.eventListContainer}>
                                <div className={EventsFormCss.eventItem}>
                                    {/* Проверяем каждое поле перед выводом */}
                                    <div className={EventsFormCss.imageContainer}>
                                        {event.image ?
                                            <img className={EventsFormCss.eventsImage} src={event.image}
                                                 alt={event.image}/> : ""}
                                    </div>
                                    <div className={EventsFormCss.textContainer}>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Тип спорта:</strong> {event.sportTypeID ? event.sportTypeID : ""}
                                        </div>
                                        {/* Здесь вставляем запрос для получения имени организатора */}
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Организатор:</strong> {event.orgName}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Название:</strong> {event.nameEvent ? event.nameEvent : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Страна:</strong> {event.country ? event.country : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Город:</strong> {event.city ? event.city : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Описание:</strong> {event.descriptionEvent ? event.descriptionEvent : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Пол:</strong> {event.gender ? event.gender : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Возраст от:</strong> {event.minAge ? event.minAge : ""}
                                        </div>

                                        <div className={EventsFormCss.eventField}>
                                            <strong>до:</strong> {event.maxAge ? event.maxAge : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Дата начала:</strong> {event.dateStart ? event.dateStart : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Дата окончания:</strong> {event.dateFinish ? event.dateFinish : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Количество игроков в группе:</strong> {event.cntPlayersInGroup ? event.cntPlayersInGroup : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Рейтинг:</strong>
                                            {event.rating ? event.rating : ""}
                                        </div>
                                    </div>
                                    {/* Продолжайте аналогично для остальных полей */}
                                    <NavLink to="/../pages/event/event.js">Просмотр</NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No events found</div>
                )}

            </div>
        )
    }
}

export default EventsForm;