import React from "react";
import button from "../../assets/css/button.module.css";

class AcceptEvent extends React.Component {
    onClickCheckEvent = (event) => {
        this.props.deleteEvent(event);
        window.location.reload();
    }

    render() {
        if (this.props.role === "admin" || this.props.role === "organizer") {
            return (
                <div>
                    <button className={`${button.buttonsInfo} ${button.deleteBtn}`}
                            onClick={() => this.onClickCheckEvent(this.props.eventId)}>Удалить запись
                    </button>
                </div>
            )
        }
    }
}

export default AcceptEvent;