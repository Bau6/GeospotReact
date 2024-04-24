import {connect} from "react-redux";
import ChooseDataEvent from "./ChooseDataEvent";
import {loadEndData, loadStartData} from "../../database/redux/events-reducer";
const mapStateToProps = (state) => {
    return {
        startData: state.eventsReducer.data.startData,
        endData: state.eventsReducer.data.endData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        thisStartData: (text) => {
            dispatch(loadStartData(text));
        },
        thisEndData: (text) => {
            dispatch(loadEndData(text));
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(ChooseDataEvent);