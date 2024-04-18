import eventsCss from "./events.module.css"
import DropDownMenuEvent from "./DropDownMenuEvent";
import ChooseDataEvent from "./ChooseDataEvent";
import EventsFormContainer from "./eventsFormContainer";
import React from "react";
import axios from "axios";
const TABLE_SPORTS = "sporttype";

class Events extends React.Component {
    // componentDidMount() {
    //     axios.get('http://localhost:3003/output-table', {
    //         params: {
    //             nameTable: TABLE_SPORTS,
    //             params: {}
    //         }
    //     })
    //         .then(response => {
    //             this.props.loadSports(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }
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