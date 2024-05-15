import {NavLink} from "react-router-dom";
import button from "../../assets/css/button.module.css";
import eventCss from "../event/event.module.css";
import React from "react";


    class ResultsTourney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocked: false, // состояние блокировки
            isEditable: false, // состояние редактирования
        };
    }
    render() {
        let { isBlocked, isEditable } = this.state;
        let filterThisPlayers = {};
        if (this.props.myUsers && (this.props.role === "admin" || this.props.role === "organizer")) {
            if (this.props.role === "admin") {
                filterThisPlayers = this.props.myUsers;
                isBlocked = true;
                isEditable = true;
            } else if (this.props.role === "organizer") {
                isEditable = true;
                filterThisPlayers = this.props.myUsers;
            }
        } else if (this.props.myUsers && (this.props.role === "user")){
            filterThisPlayers = this.props.myUsers;
        } else { filterThisPlayers = {} }

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
                                            {isBlocked && <th>Админ меню</th>}
                                            {isEditable && <th>Организатор меню</th>}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Array.isArray(filterThisPlayers) ? filterThisPlayers.map((participant) => (
                                            <tr key={participant.id} onClick={() => this.handleClick(participant)}>
                                                <td>{participant.player}</td>
                                                <td>{participant.resultName}</td>
                                                {isEditable &&
                                                    <td onClick={() => this.handleChangeUserEvent(participant.id)}>Изменить результат</td>}
                                            </tr>
                                        )) : "Нет результатов!"}
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