import EventsFormCss from "./eventsForm.module.css";
// import AuthorizationCss from "../authorization/AuthorizationCss.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import axios from "axios";
const TABLE = "events";
class EventsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3003/output-table', {
            params: {
                nameTable: TABLE,
                params: {}
            }
        })
            .then(response => {
                this.props.loadEvents(response.data);
                console.log(response.data)
                this.setState({isLoading: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({isLoading: false});
            });
    }
    render() {
        return (
            <div>
                <div className={EventsFormCss.events}>
                    <a>
                        {this.props.thisEvents && this.props.thisEvents.length > 0 && this.props.thisEvents[0].eventID ? (
                            this.props.thisEvents[0].eventID
                        ) : (
                            ""
                        )}
                    </a>
                    <NavLink to="/../pages/event/event.js">Просмотр</NavLink>
                </div>
            </div>
        )
    }
}

export default EventsForm;