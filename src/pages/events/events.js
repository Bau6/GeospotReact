import eventsCss from "./events.module.css";
import EventsFormContainer from "./eventsFormContainer";
import React from "react";
import DropDownMenuEventContainer from "./DropDownMenuEventContainer";
import ChooseDataEventContainer from "./ChooseDataEventContainer";
import AddNewEventContainer from "./AddNewEventContainer";
import AdminOrgEventsContainer from "./AdminOrgEventsContainer";
import FirstPageCss from "../first_page/first_page.module.css";

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
                        <h2 className={FirstPageCss.h2Css}>Мероприятия</h2>
                        <EventsFormContainer/>
                        {this.props.role === "admin" || this.props.role === "organizer" ? (
                            <div>
                                <AdminOrgEventsContainer/>
                            </div>
                        ) : null}
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