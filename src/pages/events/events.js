import eventsCss from "./events.module.css";
import ChooseDataEvent from "./ChooseDataEvent";
import EventsFormContainer from "./eventsFormContainer";
import React from "react";
import DropDownMenuEventContainer from "./DropDownMenuEventContainer";
import axios from "axios";

class Events extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3003/events-table')
            .then(responseEvents => {
                this.props.loadEvents(responseEvents.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className={eventsCss.containerEvent}>
                    <div className={eventsCss.fixedContent}>
                        <DropDownMenuEventContainer />
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