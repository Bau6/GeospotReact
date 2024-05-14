import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ResultsTourney from "./pages/resultsTourney/resultsTourney";
import RegistrationContainer from "./pages/registration/RegistrationContainer";
import ProfileContainer from "./pages/profile/ProfileContainer";
import ProfilePageContainer from "./pages/profile/ProfilePageContainer";
import UsersContainer from "./pages/users/usersContainer";
import AuthorizationContainer from "./pages/authorization/AuthorizationContainer";
import HeaderContainer from "./app/include/headerContainer";
import FirstPageContainer from "./pages/first_page/first_pageContainer";
import EventsContainer from "./pages/events/eventsContainer";
import EventContainer from "./pages/event/eventContainer";
import CheckingPlayersOnTourneyContainer from "./pages/checkingPlayersOnTourney/checkingPlayersOnTourneyContainer";
const App = (props) => {
    return (
        <BrowserRouter>
            <AppContent {...props}/>
        </BrowserRouter>
    );
}

const AppContent = (props) => {
    return (
        <div>
            <HeaderContainer
                store={props.store}
            />
            <Routes>
                <Route path={'/pages/events/events.js'} element={<EventsContainer store={props.store}/>}/>
                <Route path={'/pages/event/event.js'} element={<EventContainer store={props.store}/>}/>
                <Route path={'/pages/registration/Registration.js'}
                       element={<RegistrationContainer store={props.store}
                       />}/>
                <Route path={'/pages/authorization/Authorization.js'}
                       element={<AuthorizationContainer
                           store={props.store}
                       />}/>
                <Route path={'/pages/profile/Profile.js'}
                       element={<ProfileContainer
                           store={props.store}
                       />}/>
                <Route path={'/pages/first_page/first_page.js'}
                       element={<FirstPageContainer
                           store={props.store}/>}/>
                <Route path={'/pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js'}
                       element={<CheckingPlayersOnTourneyContainer store={props.store}/>}/>
                <Route path={'/pages/resultsTourney/resultsTourney.js'} element={<ResultsTourney/>}/>
                <Route path={'/pages/profile/ProfilePage.js'}
                       element={<ProfilePageContainer
                           store={props.store}/>}/>
                <Route path={'/pages/users/users.js'} element={<UsersContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
