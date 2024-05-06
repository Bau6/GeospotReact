import React from "react";
import button from "../../assets/css/button.module.css";
import eventsCss from "./events.module.css";
// import {Dropdown} from "react-bootstrap";
// import drop from "../../assets/css/dropDown.module.css";

class AcceptEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }
    handleSave = () => {
        this.props.saveEvent(this.props.thisNewEvent);
        this.toggleModal();
    };

    componentDidMount() {
        if (this.state.showModal === false) {
            this.props.clearAreaText();
        }
    }
    toggleModal = () => {
        this.setState({showModal: !this.state.showModal});
        if (this.state.showModal === false) {
            this.props.clearAreaText();
        }
    };
    render() {
        if (this.props.role === "admin") {
            return (
                <div>
                    <div>
                        <button className={`${button.buttonsInfo}`}
                                onClick={this.toggleModal}>Изменить
                        </button>
                        {this.state.showModal && (
                            <div className={`${eventsCss.modal} ${eventsCss.newWindowAddEvent}`}
                                 style={{display: this.state.showModal ? 'block' : 'none'}}>
                                <button className={eventsCss.closeButton} onClick={this.toggleModal}>X</button>
                            </div>
                        )}
                    </div>
                    {this.state.showModal && <div className={eventsCss.overlay}></div>}
                </div>
            )
        }
    }
}
export default AcceptEvent;