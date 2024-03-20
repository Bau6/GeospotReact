import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {
    onDateChangeActionCreator,
    changeRegDataActionCreator,
    onEmailChangeActionCreator,
    onNameChangeActionCreator,
    onPassChangeActionCreator,
    onPatronymicChangeActionCreator,
    onRepassChangeActionCreator,
    onSurnameChangeActionCreator
} from "../../database/redux/infoUsers-reducer";
import Registration from "./Registration";

const RegistrationContainer = (props) => {
    // debugger
    let state = props.store.getState();

    const handleChange = (text) => {

        props.store.dispatch(onDateChangeActionCreator( text ));

    }


    const addData = (text) => {
        props.store.dispatch(changeRegDataActionCreator(text));
    }

    const onEmailChange = (text) => {
        props.store.dispatch(onEmailChangeActionCreator(text));
    }

    const onPassChange = (text) => {
        props.store.dispatch(onPassChangeActionCreator(text));
    }

    const onRepassChange = (text) => {
        props.store.dispatch(onRepassChangeActionCreator(text));
    }

    const onNameChange = (text) => {
        props.store.dispatch(onNameChangeActionCreator(text));
    }

    const onSurnameChange = (text) => {
        props.store.dispatch(onSurnameChangeActionCreator(text));
    }

    const onPatronymicChange = (text) => {
        props.store.dispatch(onPatronymicChangeActionCreator( text ));
    }

    return (<Registration updateText={handleChange}
                          addData={addData}
                          onPatronymicChange={onPatronymicChange}
                          onSurnameChange={onSurnameChange}
                          onNameChange={onNameChange}
                          onRepassChange={onRepassChange}
                          onPassChange={onPassChange}
                          onEmailChange={onEmailChange}
                          sportNameFromBD={state.eventsInfo.sportNameFromBD}
                          userExampleInfo={state.infoUsers.userExampleInfo}
    />)
}

export default RegistrationContainer;