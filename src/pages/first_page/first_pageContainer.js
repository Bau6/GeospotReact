import {connect} from "react-redux";
import AdminFirstPage from "./AdminFirstPage";
import OrganizerFirstPage from "./OrganizerFirstPage";
import FirstPage from "./first_page";
import {
    defaultNewNewsActionCreator,
    loadNews,
    onChangeActionCreator,
    setCurrentPage
} from "../../database/redux/news-reducer";
import {UserLocation} from "../../database/redux/locationUserReducer";
// import {onPassLoginActionCreator} from "../../database/redux/sessionUser";
const mapStateToProps = (state) => {
    // debugger
    return {
        role: state.sessionUser.role,
        userID: state.sessionUser.userID,
        newsList: state.newsReducer.newsList,
        currentPage: state.newsReducer.currentPage,
        newsPerPage: state.newsReducer.newsPerPage,
        newNews: state.newsReducer.newNews
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadNews: (text) => {
            dispatch(loadNews( text ));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page));
        },
        onChangeAreaText: (type, text) => {
            dispatch(onChangeActionCreator(type, text));
        },
        clearTextArea: () => {
            dispatch(defaultNewNewsActionCreator());
        },
        UserLocation: (text) => {
            dispatch(UserLocation(text))
        }
    }
}

// Подключаем компонент и передаем данные о роли
const FirstPageContainer = (props) => {
    if (props.role === "admin") {
        return <AdminFirstPage {...props}/>;
    } else if (props.role === "organizer") {
        return <OrganizerFirstPage {...props}/>;
    } else {
        return <FirstPage {...props}/>;
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(FirstPageContainer);