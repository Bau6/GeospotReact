import {NavLink} from "react-router-dom";
import button from "../../assets/css/button.module.css";
import eventCss from "../event/event.module.css";

const ResultsTourney = (props) => {

    return (
        <div>
            <div className={eventCss.containerEvent}>
                <div className={eventCss.row}>
                    <div className={eventCss.col}>
                        <div className={eventCss.companyDetails}>
                            results
                            <NavLink className={`${button.buttonsInfo}`} to="/pages/event/event.js">Назад</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResultsTourney;