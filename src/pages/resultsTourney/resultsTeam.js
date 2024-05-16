import React from "react";
import {NavLink} from "react-router-dom";
import button from "../../assets/css/button.module.css";
import eventCss from "../event/event.module.css";
import eventsCss from "../events/events.module.css";

class resultsTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false, // состояние редактирования
            showModal: false,
            chooseTeam: 0,
        };
    }
    toggleModal = (id) => {
        const teamIndex = this.props.myTeams.findIndex(team => team.team_id === id);
        if (teamIndex !== -1) {
            this.setState({ chooseTeam: teamIndex });
        }
        this.setState({showModal: !this.state.showModal});
    }
    handleCheckUser(email) {
        alert(email)
    }
    render() {
        let {isEditable, chooseTeam} = this.state;
        let filterThisPlayers = {};
        if (this.props.myTeams && (this.props.role === "admin" || this.props.role === "organizer")) {
            if (this.props.role === "admin") {
                filterThisPlayers = this.props.myTeams;
                isEditable = true;
            } else if (this.props.role === "organizer") {
                filterThisPlayers = this.props.myTeams;
                isEditable = true;
            }
        } else if (this.props.myTeams && (this.props.role === "user")) {
            filterThisPlayers = this.props.myTeams;
        } else {
            filterThisPlayers = {}
        }
        let cnt = 1;
        return (
            <div>
                <div>
                    {this.state.showModal && (
                        <div className={`${eventsCss.modal} ${eventsCss.newWindowAddEvent}`}
                             style={{display: this.state.showModal ? 'block' : 'none'}}>
                            <button className={eventsCss.closeButton} onClick={this.toggleModal}>X</button>
                            <table>
                                <thead>
                                <tr>
                                    <th>Номер</th>
                                    <th>Игрок</th>
                                    <th>Статус</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Array.isArray(this.props.myTeams[chooseTeam].players) ? this.props.myTeams[chooseTeam].players.map((participant) => (
                                    <tr key={cnt++}
                                        onClick={() => this.handleCheckUser(participant.email)}>
                                        <td>{cnt}</td>
                                        <td>{participant.player}</td>
                                        <td>{participant.nameStatus}</td>
                                    </tr>
                                )) : "Нет игроков!"}
                                </tbody>
                            </table>
                        </div>)}
                    {this.state.showModal && <div className={eventsCss.overlay}></div>}
                </div>
                <div className={eventCss.containerEvent}>
                    <div className={eventCss.row}>
                        <div className={eventCss.col}>
                            <div className={eventCss.companyDetails}>
                                <div className="players">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Команда</th>
                                            <th>Результат</th>
                                            {isEditable && <th>Меню</th>}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Array.isArray(filterThisPlayers) ? filterThisPlayers.map((participant) => (
                                            <tr key={participant.team_id}
                                                onClick={() => this.toggleModal(participant.team_id)}>
                                                <td>{participant.name}</td>
                                                <td>{participant.result}</td>
                                                {isEditable &&
                                                    <td onClick={() => this.handleChangeUserEvent(participant.team_id)}>Изменить
                                                        результат</td>}
                                            </tr>
                                        )) : "Нет команд!"}
                                        </tbody>
                                    </table>
                                </div>
                                <br/>
                                <NavLink className={`${button.buttonsInfo}`}
                                         to="/../../pages/event/event.js">Назад</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default resultsTeam;