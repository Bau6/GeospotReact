import {NavLink} from "react-router-dom";
import React from "react";
import button from "../../assets/css/button.module.css";
import eventsCss from "../events/events.module.css";

class teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocked: false, // состояние блокировки
            isEditable: false, // состояние редактирования
            chooseTeam: 0,
        };
    }

    handleClick = (participant) => {
        console.log(`Выбран участник ${participant.name}`);
    };

    handleRegistrationClick = () => {
        // обработчик нажатия на кнопку "Зарегистрироваться на турнир"
        // реализация функционала
    };

    handleBlockClick = () => {
        // обработчик нажатия на кнопку "Заблокировать"
        // реализация функционала
        this.setState({ isBlocked: true });
    };
    handleBlockUserEvent = (id) => {
        this.props.blockUserEvent(id);
    }
    handleUnBlockUserEvent = (id) => {
        this.props.unBlockUserEvent(id);
    }
    handleCheckUser = (id) => {
        alert(id)
    }
    toggleModal = (id) => {
        const teamIndex = this.props.myTeams.findIndex(team => team.team_id === id);
        if (teamIndex !== -1) {
            this.setState({ chooseTeam: teamIndex });
        }
        this.setState({showModal: !this.state.showModal});
    }
    handleEditClick = () => {
        // обработчик нажатия на кнопку "Редактирование"
        // реализация функционала
        this.setState({ isEditable: true });
    };
    componentDidMount() {
        // генерация рандомных данных
        console.log(this.props)
    }


    render() {
        let { isBlocked, isEditable, chooseTeam } = this.state;
        let filterThisPlayers = {};
        if (this.props.myTeams && (this.props.role === "admin" || this.props.role === "organizer")) {
            if (this.props.role === "admin") {
                filterThisPlayers = this.props.myTeams;
                isBlocked = true;
                isEditable = true;
            } else if (this.props.role === "organizer") {
                isEditable = true;
            }
        } else if (this.props.myTeams && (this.props.role === "user")){
            filterThisPlayers = this.props.myTeams;
        } else { filterThisPlayers = {} }
        let cnt = 1;
        let cntP = 1;
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
                                    <tr key={cntP++}
                                        onClick={() => this.handleCheckUser(participant.email)}>
                                        <td>{cntP}</td>
                                        <td>{participant.player}</td>
                                        <td>{participant.nameStatus}</td>
                                    </tr>
                                )) : "Нет игроков!"}
                                </tbody>
                            </table>
                        </div>)}
                    {this.state.showModal && <div className={eventsCss.overlay}></div>}
                </div>
                <div className="players">
                    <table>
                        <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Команда</th>
                            <th>Статус</th>
                            <th>Дата регистрации</th>
                            {isEditable && <th>Меню</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {Array.isArray(filterThisPlayers) ? filterThisPlayers.map((participant) => (
                            <tr key={participant.team_id} onClick={() => this.toggleModal(participant.team_id)}>
                                <td>{cnt++}</td>
                                <td>{participant.name}</td>
                                <td>{participant.statusName}</td>
                                <td>{participant.date}</td>
                                {isEditable &&
                                    <td onClick={() => this.handleChangeUserEvent(participant.team_id)}>Изменить</td>}
                            </tr>
                        )) : "Нет команд!"}
                        </tbody>
                    </table>
                </div>
                <br/>
                {/*<NavLink to="/../../pages/resultsTourney/resultsTourney.js">Результаты</NavLink>*/}
                {/*<button onClick={this.handleRegistrationClick}>Зарегистрироваться на турнир</button>*/}
                <NavLink className={`${button.buttonsInfo}`} to="/../../pages/event/event.js">Назад</NavLink>
            </div>
        );
    }
}

export default teams;