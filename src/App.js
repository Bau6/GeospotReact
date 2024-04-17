import './App.css';
import React from "react";
// import Header from './app/include/header';
// import AuthorizationContainer from "./pages/authorization/AuthorizationDelete";
import Events from "./pages/events/events";
import Event from "./pages/event/event";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CheckingPlayersOnTourney from "./pages/checkingPlayersOnTourney/checkingPlayersOnTourney";
import ResultsTourney from "./pages/resultsTourney/resultsTourney";
import RegistrationContainer from "./pages/registration/RegistrationContainer";
import ProfileContainer from "./pages/profile/ProfileContainer";
import ProfilePageContainer from "./pages/profile/ProfilePageContainer";
import UsersContainer from "./pages/users/usersContainer";
import AuthorizationContainer from "./pages/authorization/AuthorizationContainer";
import HeaderContainer from "./app/include/headerContainer";
import FirstPageContainer from "./pages/first_page/first_pageContainer";
import EventsContainer from "./pages/events/eventsContainer";
const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <HeaderContainer
                    store={props.store}
                />
                <Routes>
                    <Route path={'/pages/events/events.js'} element={<EventsContainer store={props.store}/>}/>
                    <Route path={'/pages/event/event.js'} element={<Event store={props.store}/>}/>
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
                    <Route path={'/pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js'} element={<CheckingPlayersOnTourney store={props.store}/>}/>
                    <Route path={'/pages/resultsTourney/resultsTourney.js'} element={<ResultsTourney />}/>
                    <Route path={'/pages/profile/ProfilePage.js'}
                           element={<ProfilePageContainer
                               store={props.store}/>}/>
                    <Route path={'/pages/users/users.js'} element={<UsersContainer />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
