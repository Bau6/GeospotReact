import EventsFormCss from "./eventsForm.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";

class EventsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisEventsTest: {}
        };
    }

    render() {
        return (
            <div>
                {/* Проверяем наличие thisEvents и его длину */}
                {this.props.thisEvents && this.props.thisEvents.length > 0 ? (
                    // Используем map для вывода каждого объекта
                    this.props.thisEvents.map(event => (
                        <div key={event.id} className={EventsFormCss.eventListContainer}>
                            {/*{event.eventID}{event.id}*/}
                            {/* Проверяем каждое поле перед выводом */}
                            <div className={EventsFormCss.imageContainer}>
                                {event.image ?
                                    <img className={EventsFormCss.eventsImage} src={event.image}
                                         alt={event.image}/> : ""}
                            </div>
                            <div className={EventsFormCss.textContainer}>
                                <div className={EventsFormCss.eventField}>
                                    <strong>Тип спорта:</strong> {event.sport ? event.sport : ""}
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
                                    <strong>Дата
                                        начала:</strong> {event.dateStart ? dateStrISO(event.dateStart, DATE_FORMAT_DATE) : ""}
                                </div>
                                <div className={EventsFormCss.eventField}>
                                    <strong>Дата
                                        окончания:</strong> {event.dateFinish ? dateStrISO(event.dateFinish, DATE_FORMAT_DATE) : ""}
                                </div>
                                <div className={EventsFormCss.eventField}>
                                    <strong>Количество игроков в
                                        группе:</strong> {event.cntPlayersInGroup ? event.cntPlayersInGroup : ""}
                                </div>
                                <div className={EventsFormCss.eventField}>
                                    <strong>Рейтинг:</strong>
                                    {event.rating ? event.rating : ""}
                                </div>
                            </div>
                            {/* Продолжайте аналогично для остальных полей */}
                            <NavLink to="/../pages/event/event.js">Просмотр</NavLink>
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