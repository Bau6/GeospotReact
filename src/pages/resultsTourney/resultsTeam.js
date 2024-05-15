import React from "react";
import {NavLink} from "react-router-dom";
import button from "../../assets/css/button.module.css";
import eventCss from "../event/event.module.css";

class resultsTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false, // состояние редактирования
        };
    }

    render() {
        let {isEditable} = this.state;
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
                                            <th>Команда</th>
                                            <th>Результат</th>
                                            {isEditable && <th>Организатор меню</th>}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Array.isArray(filterThisPlayers) ? filterThisPlayers.map((participant) => (
                                            <tr key={participant.team_id} onClick={() => this.handleClick(participant)}>
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