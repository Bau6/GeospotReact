import {NavLink} from "react-router-dom";
import React from "react";
import "./chekingPlayersOnTourney.css";

class PlayersInTourney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocked: false, // состояние блокировки
            isEditable: false, // состояние редактирования
            participants: props.participantsFromBD // список участников
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

    handleEditClick = () => {
        // обработчик нажатия на кнопку "Редактирование"
        // реализация функционала
        this.setState({ isEditable: true });
    };
    componentDidMount() {
        // генерация рандомных данных
        console.log(this.props)
        const participants = this.state.participants;
        this.setState({ participants });
    }


    render() {
        let { isBlocked, isEditable } = this.state;
        let filterThisPlayers = {};
        if (this.props.myUsers && (this.props.role === "admin" || this.props.role === "organizer")) {
            if (this.props.role === "admin") {
                filterThisPlayers = this.props.myUsers;
                isBlocked = true;
            } else if (this.props.role === "organizer") {
                isEditable = true;
                filterThisPlayers = this.props.myUsers.filter(players => players.status === 2 && players.status === 1);
            }
        } else if (this.props.myUsers && (this.props.role === "user")){
            filterThisPlayers = this.props.myUsers.filter(players => players.status === 2);
        } else { filterThisPlayers = {} }
        return (
            <div>
                <div className="players">
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Возраст</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.isArray(filterThisPlayers) ? filterThisPlayers.map((participant) => (
                            <tr key={participant.id} onClick={() => this.handleClick(participant)}>
                                <td>{participant.id}</td>
                                <td>{participant.name}</td>
                                <td>{participant.age}</td>
                            </tr>
                        )) : "Нет участников!"}
                        </tbody>
                    </table>
                </div>
                <br/>
                {/*<NavLink to="/../../pages/resultsTourney/resultsTourney.js">Результаты</NavLink>*/}
                {/*<button onClick={this.handleRegistrationClick}>Зарегистрироваться на турнир</button>*/}
                <NavLink to="/../../pages/event/event.js">Назад</NavLink>
                {isBlocked && <button >Заблокировать</button>}
                {isEditable && <button >Редактирование</button>}
            </div>
        );
    }
}

export default PlayersInTourney;