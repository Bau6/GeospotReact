import {NavLink} from "react-router-dom";
import button from "../../assets/css/button.module.css";
import eventCss from "../event/event.module.css";
import React from "react";
import drop from "../../assets/css/dropDown.module.css";
import {Dropdown} from "react-bootstrap";


class ResultsTourney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
        };
    }
    handleCheckUser(email) {
        alert(email)
    }
    handleDropdownSelect = (name, type, id, idEvent) => {
        console.log(idEvent)
        this.props.onChangeAreaTextTeam(name, type, id, idEvent);
        this.props.updateResultEvent(idEvent, id);
    };
    render() {
        let {isEditable} = this.state;
        let filterThisPlayers = {};
        if (this.props.myUsers && (this.props.role === "admin" || this.props.role === "organizer")) {
            if (this.props.role === "admin") {
                filterThisPlayers = this.props.myUsers;
                isEditable = true;
            } else if (this.props.role === "organizer") {
                isEditable = true;
                filterThisPlayers = this.props.myUsers;
            }
        } else if (this.props.myUsers && (this.props.role === "user")) {
            filterThisPlayers = this.props.myUsers.filter(players => players.result !== 1);
        } else {
            filterThisPlayers = {}
        }
        return (
            <div>
                <div className={eventCss.containerEvent}>
                    <div className={eventCss.row}>
                        <div className={eventCss.col}>
                            <div className={eventCss.companyDetails}>
                                <div className="players">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Игрок</th>
                                            <th>Результат</th>
                                            {isEditable && <th>Меню</th>}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Array.isArray(filterThisPlayers) ? filterThisPlayers.map((participant) => (
                                            <tr key={participant.id} >
                                                <td onClick={() => this.handleCheckUser(participant.email)}>{participant.player}</td>
                                                <td onClick={() => this.handleCheckUser(participant.email)}>{participant.resultName}</td>
                                                {isEditable &&
                                                    <td >
                                                        <Dropdown className={`${drop.dropDownDesign}`}>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                                                                         className={`${drop.dropdownToggle}`}>
                                                            {this.props.participantResults && this.props.participantResults[participant.id] ? this.props.participantResults[participant.id].name : 'Изменить результат'}
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                                                            {Array.isArray(this.props.resultsTourney) ? this.props.resultsTourney && this.props.resultsTourney.map((item) => (
                                                                <Dropdown.Item className={`${drop.dropdownItem}`} key={item.id}
                                                                               onClick={() => this.handleDropdownSelect(item.name, 'SELECT_DROPDOWN_TOURNEY_RESULTS', item.id, participant.id)}>
                                                                    {item.name}
                                                                </Dropdown.Item>
                                                            )) : ""}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </td>}
                                            </tr>
                                        )) : "Нет результатов!"}
                                        {filterThisPlayers.length ? "" :
                                            <tr>
                                                <td colSpan={isEditable ? 3 : 2}>Нет результатов!</td>
                                            </tr>
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                <br/>
                                <NavLink className={`${button.buttonsInfo}`} to="/pages/event/event.js">Назад</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultsTourney;