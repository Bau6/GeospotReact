import React from "react";
import button from "../../assets/css/button.module.css";

class AcceptEvent extends React.Component {


    toggleModal = () => {
        this.props.onChangeAreaText("CHOOSE_EVENT", this.props.eventId)

            this.props.clearAreaText();
            const eventToUpdate = this.props.thisEvents.find(event => event.id === this.props.eventId);
            if (eventToUpdate) {

            }
    };
    onClickCheckEvent = (event) => {
        this.props.addOnPageEvent(event);
        window.location.reload();
    }

    render() {
        if (this.props.role === "admin") {
            return (
                <div>
                    <button className={`${button.buttonsInfo}`}
                            onClick={() => this.onClickCheckEvent(this.props.eventId)}>Добавить запись
                    </button>
                </div>
            )
        }
    }
}

export default AcceptEvent;