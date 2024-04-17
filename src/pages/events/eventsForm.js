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
            isLoading: true
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
                this.props.loadEvents(response.data);
                console.log(response.data)
                this.setState({isLoading: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({isLoading: false});
            });
    }

    render() {
        return (
            <div>
                {/* Проверяем наличие thisEvents и его длину */}
                {this.props.thisEvents && this.props.thisEvents.length > 0 ? (
                    // Используем map для вывода каждого объекта
                    this.props.thisEvents.map(event => (
                        <div className={EventsFormCss.events}>
                            <div className={EventsFormCss.eventListContainer}>
                                <div className={EventsFormCss.eventItem} key={event.eventID}>
                                    {/* Проверяем каждое поле перед выводом */}
                                    <div className={EventsFormCss.eventField}>
                                        <strong>Event ID:</strong> {event.eventID ? event.eventID : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>Sport Type
                                            ID:</strong> {event.sportTypeID ? event.sportTypeID : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>Org ID:</strong> {event.orgID ? event.orgID : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>nameEvent:</strong> {event.nameEvent ? event.nameEvent : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>country:</strong> {event.country ? event.country : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>city:</strong> {event.city ? event.city : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>descriptionEvent:</strong> {event.descriptionEvent ? event.descriptionEvent : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>gender:</strong> {event.gender ? event.gender : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>minAge:</strong> {event.minAge ? event.minAge : ""}
                                    </div>

                                    <div className={EventsFormCss.eventField}>
                                        <strong>maxAge:</strong> {event.maxAge ? event.maxAge : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>minAge:</strong> {event.minAge ? event.minAge : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>dateStart:</strong> {event.dateStart ? event.dateStart : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>dateFinish:</strong> {event.dateFinish ? event.dateFinish : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>cntPlayersInGroup:</strong> {event.cntPlayersInGroup ? event.cntPlayersInGroup : ""}
                                    </div>
                                    <div className={EventsFormCss.eventField}>
                                        <strong>rating:</strong> {event.rating ? <img className={EventsFormCss.eventsImage} src={event.rating} alt={event.rating} /> : ""}
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