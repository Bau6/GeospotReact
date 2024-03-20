import './App.css';
import React from "react";
import Header from './app/include/header';
import Authorization from "./pages/authorization/Authorization";
import Events from "./pages/events/events";
import Event from "./pages/event/event";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstPage from "./pages/first_page/first_page";
import CheckingPlayersOnTourney from "./pages/checkingPlayersOnTourney/checkingPlayersOnTourney";
import ResultsTourney from "./pages/resultsTourney/resultsTourney";
import RegistrationContainer from "./pages/registration/RegistrationContainer";
import ProfileContainer from "./pages/profile/ProfileContainer";
import ProfilePageContainer from "./pages/profile/ChangeInfProfileContainer";
const App = (props) => {
    // const eventStatsFromBD = useSelector(state => props.state.eventsInfo.eventStatsFromBD);
    // const sportNameFromBD = useSelector(state => props.state.eventsInfo.sportNameFromBD);
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path={'/pages/events/events.js'} element={<Events sportNameFromBD={props.state.eventsInfo.sportNameFromBD}/>}/>
                    <Route path={'/pages/event/event.js'} element={<Event eventStatsFromBD={props.state.eventsInfo.eventStatsFromBD}/>}/>
                    <Route path={'/pages/registration/Registration.js'}
                           element={<RegistrationContainer store={props.store}
                           />}/>
                    <Route path={'/pages/authorization/Authorization.js'} element={<Authorization/>}/>
                    <Route path={'/pages/profile/Profile.js'}
                           element={<ProfileContainer
                               store={props.store}
                           />}/>
                    <Route path={'/pages/first_page/first_page.js'} element={<FirstPage/>}/>
                    <Route path={'/pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js'} element={<CheckingPlayersOnTourney participantsFromBD={props.state.users.participantsFromBD}/>}/>
                    <Route path={'/pages/resultsTourney/resultsTourney.js'} element={<ResultsTourney />}/>
                    <Route path={'/pages/profile/changeInfProfile.js'}
                           element={<ProfilePageContainer
                               store={props.store}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
