import eventsCss from "./events.module.css";
import EventsFormContainer from "./eventsFormContainer";
import React from "react";
import DropDownMenuEventContainer from "./DropDownMenuEventContainer";
import ChooseDataEventContainer from "./ChooseDataEventContainer";
import AddNewEventContainer from "./AddNewEventContainer";
// import AcceptEventContainer from "./AcceptEventContainer";

class Events extends React.Component {
    componentDidMount() {
        this.props.UserLocation(window.location.href);
        this.props.loadCities();
        this.props.loadCountries();
        this.props.loadGenders();
    }
    render() {
        return (
            <div>
                <div className={eventsCss.containerEvent}>
                    <div className={eventsCss.fixedContent}>
                        <DropDownMenuEventContainer/>
                        <ChooseDataEventContainer/>
                    </div>
                    <div className={eventsCss.fixedEvents}>
                        <div>Мероприятия</div>
                        <EventsFormContainer/>
                    </div>
                </div>
                <div>
                    <AddNewEventContainer/>
                </div>

            </div>
        )
    }
}

export default Events;