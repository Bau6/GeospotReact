import EventsFormCss from "./eventsForm.module.css";
import React from "react";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";
import {NavLink} from "react-router-dom";

class EventsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thisEventsTest: {}
        };
    }
    onClickCheckEvent(id) {
        // return (
        //     <NavLink to={`/../pages/event/event.js?id=${id}`}>
        //     </NavLink>
        // );
        // window.location.href=`/../pages/event/event.js?id=${id}`;
    }
    render() {
        // debugger
        let cnt = false;
        return (
            <div>
                {/* Проверяем наличие thisEvents и его длину */}
                {this.props.thisEvents && this.props.thisEvents.length > 0 ? (
                    // Используем map для вывода каждого объекта
                    this.props.thisEvents.map(event => {
                        // Проверяем условия фильтрации по выбранной дате
                        const dateStart = new Date(event.dateStart);
                        const dateEnd = new Date(event.dateFinish);
                        const currentDate = new Date();
                        dateStart.setHours(0, 0, 0, 0);
                        dateEnd.setHours(0, 0, 0, 0);
                        currentDate.setHours(0, 0, 0, 0);
// Сравниваем только по году, месяцу и дню
                        if ((this.props.chooseSport === "" || event.sport === this.props.chooseSport) &&
                            ((dateStart.getTime() > currentDate.getTime() && dateEnd.getTime() > currentDate.getTime() && this.props.data === 1) || // Предстоящие
                                (dateEnd.getTime() < currentDate.getTime() && this.props.data === 2) || // Прошедшие
                                (dateStart.getTime() <= currentDate.getTime() && dateEnd.getTime() >= currentDate.getTime() && this.props.data === 3) || // Идущие
                                (this.props.data === 0))) { // Все
                            cnt = true;
                            return (
                                // onClick={() => {window.location="/../pages/event/event.js"}}
                            <div key={event.id} className={EventsFormCss.eventListContainer}>
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
                                            <strong>Дата
                                                начала:</strong> {event.dateStart ? dateStrISO(event.dateStart, DATE_FORMAT_DATE) : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Дата
                                                окончания:</strong> {event.dateFinish ? dateStrISO(event.dateFinish, DATE_FORMAT_DATE) : ""}
                                        </div>
                                        <div className={EventsFormCss.eventField}>
                                            <strong>Рейтинг:</strong>
                                            {event.rating ? event.rating : ""}
                                        </div>
                                    </div>
                                {this.props.log && (
                                    <NavLink to={`/../pages/event/event.js?id=${event.id}`}>
                                        <button onClick={() => this.onClickCheckEvent(event.id)}>Просмотр</button>
                                    </NavLink>
                                )}
                                </div>
                            )
                        } else {
                            return null; // Если не соответствует условиям фильтрации, возвращаем null
                        }
                    })
                ) : (<div></div>)}
                {cnt ? null : <div className={EventsFormCss.notEvents}>Мероприятия не найдены!</div>}
            </div>
        )
    }
}

export default EventsForm;