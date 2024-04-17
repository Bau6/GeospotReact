import eventsCss from "./events.module.css"
import DropDownMenuEvent from "./DropDownMenuEvent";
import ChooseDataEvent from "./ChooseDataEvent";
// import EventsForm from "./eventsForm";
import EventsFormContainer from "./eventsFormContainer";
const Events = (props) => {

    return (
        <div>
            <div className={eventsCss.containerEvent}>
                <div>
                    <DropDownMenuEvent sportNameFromBD={props.sports}/>
                    <ChooseDataEvent />
                    <button className={eventsCss.FindEvent}>Поиск</button>
                </div>
                <div>
                    <a>Мероприятия</a>
                    <EventsFormContainer />
                </div>
            </div>
        </div>
    )
}

export default Events;