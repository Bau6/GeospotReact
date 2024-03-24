import React from "react";
import eventCss from "./event.module.css"
import {NavLink} from "react-router-dom";

class Event extends React.Component {


    render() {


        return (
            <div>
                <h1>Описание спортивного мероприятия</h1>

                <NavLink to="/../../pages/resultsTourney/resultsTourney.js">Результаты</NavLink>
                <button onClick={this.handleRegistrationClick}>Зарегистрироваться на турнир</button>
                <NavLink to="/../../pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js">Просмотр участников</NavLink>
                <NavLink to="/../../pages/events/events.js">Назад</NavLink>
            </div>
        );
    }
}

export default Event;