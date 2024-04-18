import eventsCss from "./events.module.css";
import ChooseDataEvent from "./ChooseDataEvent";
import EventsFormContainer from "./eventsFormContainer";
import React from "react";
import DropDownMenuEventContainer from "./DropDownMenuEventContainer";

class Events extends React.Component {
    render() {
        return (
            <div>
                <div className={eventsCss.containerEvent}>
                    <div className={eventsCss.fixedContent}>
                        <DropDownMenuEventContainer loadSports={this.props.loadSports}/>
                        <ChooseDataEvent/>
                        <button className={eventsCss.FindEvent}>Поиск</button>
                    </div>
                    <div className={eventsCss.fixedEvents}>
                        <div>Мероприятия</div>
                        <EventsFormContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;