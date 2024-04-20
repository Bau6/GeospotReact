import {connect} from "react-redux";
// import {loadSports} from "../../database/redux/events-reducer";
import DropDownMenuEvent from "./DropDownMenuEvent";

const mapStateToProps = (state) => {
    return {
        sports: state.eventsReducer.storeEvents.sports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DropDownMenuEvent);