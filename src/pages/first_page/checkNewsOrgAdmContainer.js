import {connect} from "react-redux";
import {
    loadNews, updateNewListActionCreator
} from "../../database/redux/news-reducer";
import CheckNewsOrgAdm from "./checkNewsOrgAdm";
const mapStateToProps = (state) => {
    // debugger
    return {
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
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(CheckNewsOrgAdm);