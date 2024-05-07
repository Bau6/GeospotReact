import {connect} from "react-redux";
import ChooseDataEvent from "./ChooseDataEvent";
import {loadData} from "../../database/redux/events-reducer";
const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (text) => {
            dispatch(loadData(text));
        },
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(ChooseDataEvent);