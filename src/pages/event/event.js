import React from "react";
import eventCss from "./event.module.css"
import {NavLink} from "react-router-dom";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocked: false, // состояние блокировки
            isEditable: false, // состояние редактирования
            eventStats: props.eventStatsFromBD
        };
    }

    handleRegistrationClick = () => {
        // обработчик нажатия на кнопку "Зарегистрироваться на турнир"
        // реализация функционала
    };

    handleBlockClick = () => {
        // обработчик нажатия на кнопку "Заблокировать"
        // реализация функционала
        this.setState({ isBlocked: true });
    };

    handleEditClick = () => {
        // обработчик нажатия на кнопку "Редактирование"
        // реализация функционала
        this.setState({ isEditable: true });
    };
    componentDidMount() {
        // генерация рандомных данных
        const eventStats = this.state.eventStats;
        this.setState({ eventStats });
    }


    render() {
        const { eventStats } = this.state;
        const { isBlocked, isEditable } = this.state;

        return (
            <div>
                <h1>Описание спортивного мероприятия</h1>
                {eventStats?.map((eventStat) => (
                    <div key={eventStat.id}>
                        <p>{eventStat.event}</p>
                    </div>
                ))}
                <NavLink to="/../../pages/resultsTourney/resultsTourney.js">Результаты</NavLink>
                <button onClick={this.handleRegistrationClick}>Зарегистрироваться на турнир</button>
                <NavLink to="/../../pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js">Просмотр участников</NavLink>
                <NavLink to="/../../pages/events/events.js">Назад</NavLink>
                {isBlocked && <button >Заблокировать</button>}
                {isEditable && <button >Редактирование</button>}
            </div>
        );
    }
}

export default Event;