import EventsFormCss from "./eventsForm.module.css";
// import AuthorizationCss from "../authorization/AuthorizationCss.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const EventsForm = (props) => {

    return (
        <div>
            <div className={EventsFormCss.events}>
                <a>Тут должно быть мероприятие {props.numEvent}</a>
                <NavLink to="/../pages/event/event.js">Просмотр</NavLink>
            </div>
        </div>
    )
}

export default EventsForm;