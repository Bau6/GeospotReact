import eventsCss from "./events.module.css"
import DropDownMenuEvent from "./DropDownMenuEvent";
import ChooseDataEvent from "./ChooseDataEvent";
import EventsForm from "./eventsForm";
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
                    <EventsForm numEvent={1}/>
                    <EventsForm numEvent={2}/>
                </div>
            </div>
        </div>
    )
}

export default Events;