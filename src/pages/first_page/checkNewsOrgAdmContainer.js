import {connect} from "react-redux";
import {
    loadNews, updateNewListActionCreator
} from "../../database/redux/news-reducer";
import CheckNewsOrgAdm from "./checkNewsOrgAdm";
import {addNewsUser, UserLocation} from "../../database/redux/locationUserReducer";
const mapStateToProps = (state) => {
    // debugger
    return {
        role: state.sessionUser.role,
        userID: state.sessionUser.userID,
        newsList: state.newsReducer.newsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadNews: (text) => {
            dispatch(loadNews( text ));
        },
        updateNewsList: (text) => {
            dispatch(updateNewListActionCreator(text));
        },
        UserLocation: (text) => {
            dispatch(UserLocation(text))
        },
        addNewsUser: (id, status) => {
            dispatch(addNewsUser(id, status));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(CheckNewsOrgAdm);