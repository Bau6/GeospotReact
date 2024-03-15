import './App.css';
import React from "react";
import Header from './app/include/header';
import Authorization from "./pages/authorization/Authorization";
import Registration from "./pages/registration/Registration";
import Events from "./pages/events/events";
import Event from "./pages/event/event";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstPage from "./pages/first_page/first_page";
import Profile from "./pages/profile/Profile";
import CheckingPlayersOnTourney from "./pages/checkingPlayersOnTourney/checkingPlayersOnTourney";
import ResultsTourney from "./pages/resultsTourney/resultsTourney";
import News from "./app/include/news";
import Footer from './app/include/footer';
const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path={'/pages/events/events.js'} element={<Events sportNameFromBD={props.state.eventsInfo.sportNameFromBD}/>}/>
                    <Route path={'/pages/event/event.js'} element={<Event eventStatsFromBD={props.state.eventsInfo.eventStatsFromBD}/>}/>
                    <Route path={'/pages/registration/Registration.js'}
                           element={<Registration sportNameFromBD={props.state.eventsInfo.sportNameFromBD}
                                                  stateFromBD={props.state}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path={'/pages/authorization/Authorization.js'} element={<Authorization/>}/>
                    <Route path={'/pages/profile/Profile.js'}
                           element={<Profile
                               stateFromBD={props.state}
                           />}/>
                    <Route path={'/pages/first_page/first_page.js'} element={<FirstPage/>}/>
                    <Route path={'/pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js'} element={<CheckingPlayersOnTourney participantsFromBD={props.state.users.participantsFromBD}/>}/>
                    <Route path={'/pages/resultsTourney/resultsTourney.js'} element={<ResultsTourney />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
