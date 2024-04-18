import {connect} from "react-redux";
import Events from "./events";
import {clearEvents, loadSports} from "../../database/redux/events-reducer";

const mapStateToProps = (state) => {
    return {
        sports: state.eventsReducer.sports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // loadSports: (text) => {
        //     dispatch(loadSports(text));
        // }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Events);