import {connect} from "react-redux";
import AdminFirstPage from "./AdminFirstPage";
import OrganizerFirstPage from "./OrganizerFirstPage";
import FirstPage from "./first_page";
import {loadNews, setCurrentPage} from "../../database/redux/news-reducer";
// import {onPassLoginActionCreator} from "../../database/redux/sessionUser";
const mapStateToProps = (state) => {
    console.log(state)
    return {
        role: state.sessionUser.role,
        newsList: state.newsReducer.newsList,
        currentPage: state.newsReducer.currentPage,
        newsPerPage: state.newsReducer.newsPerPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadNews: (text) => {
            dispatch(loadNews( text ));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page));
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