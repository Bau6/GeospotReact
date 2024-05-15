import {NavLink} from "react-router-dom";
import React from "react";
import button from "../../assets/css/button.module.css";

class teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocked: false, // состояние блокировки
            isEditable: false, // состояние редактирования
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
    handleChangeUserEvent = (id) => {
        alert(id)
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
        let { isBlocked, isEditable } = this.state;
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
        let cnt = 0;
        return (
            <div>
                <div className="players">
                    <table>
                        <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Команда</th>
                            <th>Статус</th>
                            <th>Дата регистрации</th>
                            {isBlocked && <th>Админ меню</th>}
                            {isEditable && <th>Организатор меню</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {Array.isArray(filterThisPlayers) ? filterThisPlayers.map((participant) => (
                            <tr key={participant.id} onClick={() => this.handleClick(participant)}>
                                <td>{cnt++}</td>
                                <td>{participant.name}</td>
                                <td>{participant.statusName}</td>
                                <td>{participant.date}</td>
                                {isBlocked && participant.status === 2 ?
                                    <td onClick={() => this.handleBlockUserEvent(participant.id)}>Заблокировать</td> :
                                    participant.status === 1 ?
                                        <td onClick={() => this.handleUnBlockUserEvent(participant.id)}>Разблокировать</td> : ""}
                                {isEditable &&
                                    <td onClick={() => this.handleChangeUserEvent(participant.id)}>Изменить</td>}
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