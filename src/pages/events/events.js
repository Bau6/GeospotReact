import eventsCss from "./events.module.css"
import DropDownMenuEvent from "./DropDownMenuEvent";
import ChooseDataEvent from "./ChooseDataEvent";
// import EventsForm from "./eventsForm";
import EventsFormContainer from "./eventsFormContainer";
import React from "react";

class Events extends React.Component {
    render() {
        return (
            <div>
                <div className={eventsCss.containerEvent}>
                    <div className={eventsCss.fixedContent}>
                        <DropDownMenuEvent sportNameFromBD={this.props.sports}/>
                        <ChooseDataEvent/>
                        <button className={eventsCss.FindEvent}>Поиск</button>
                    </div>
                    <div className={eventsCss.fixedEvents}>
                        <a>Мероприятия</a>
                        <EventsFormContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;