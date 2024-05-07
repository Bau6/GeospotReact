import { connect } from 'react-redux';
import MyButton from './button';
import {addNewsOrg} from "../../database/redux/locationUserReducer";

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewsOrg: (news) => {
            dispatch(addNewsOrg(news));
        }
    };
};

const MyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(MyButton);

export default MyButtonContainer;