import React from "react";
import eventCss from "./event.module.css";
import button from "../../assets/css/button.module.css";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";
import {NavLink} from "react-router-dom";
import eventsCss from "../events/events.module.css";
import drop from "../../assets/css/dropDown.module.css";
import {Dropdown} from "react-bootstrap";
import profileCss from "../profile/ProfileCss.module.css";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModalCreateTeam: false,
            showModalAddUserInTeam: false,
            ref1: React.createRef(),
            ref2: React.createRef(),
        }
    }
    componentDidMount() {
        // const urlParams = new URLSearchParams(window.location.search);
        // const id = urlParams.get(`id`);
        this.props.loadEvent(this.props.eventId);
        console.log(this.props)
    }

    LocationMap() {
        const srcLocation1 = "30.251109";
        const srcLocation2 = "59.909346";
        return (
            <div id="map-area">
                <iframe width="100%" height="auto" title="Карта с местоположением"
                        src={`https://yandex.ru/map-widget/v1/?um=/?ll=${srcLocation1},${srcLocation2};source=constructor&pt=${srcLocation1},${srcLocation2}`}>
                </iframe>
            </div>
        );
    };
    handleShowModalAddUserInTeam(){
        this.setState({ showModalAddUserInTeam: true });
    }
    handleShowModalCreateTeam(){
        this.setState({ showModalCreateTeam: true });
    }
    handleRegistrationTourney() {
        this.props.registrationTourney(this.props.eventId, this.props.userID.id);
    }
    thisResults(id) {
        this.props.thisUsersLoadForEvent(id);
    }
    handleRegistrationTeam() {
        this.setState({showModal: !this.state.showModal});
    }
    toggleModal = () => {
        this.setState({showModal: !this.state.showModal});
    }
    toggleModalAddUserInTeam = () => {
        this.setState({showModalAddUserInTeam: false});
    }
    toggleModalCreateTeam = () => {
        this.setState({showModalCreateTeam: false});
    }
    handleNameChange = () => {
        if (!!this.state.ref1) {
            let newText = this.state.ref1.current.value;
            this.props.onChangeAreaText("NAME_NEW_TEAM", newText);
        }
    }
    handleAddUserInTeam(userID, teamID) {
        if (teamID && userID) {
            this.props.addPlayers(teamID, userID, this.props.event.sportTypeID);
        } else {
            alert("Выберите команду!")
        }
    }
    handleAddTeam(eventID, userID) {
        if (!!this.state.ref1) {
            let newText = this.state.ref1.current.value;
            this.props.createTeam(eventID, userID, newText);
        }
    }
    handleDropdownSelect = (name, team, id) => {
        this.props.onChangeAreaTextTeam(team, name, id);
    };
    render() {
        if (!!this.props.event) {
            return (
                <div className={profileCss.containerProfile}>
                    <div>
                        {this.state.showModal && (
                            <div className={`${eventsCss.modal} ${eventsCss.newWindowAddEvent}`}
                                 style={{display: this.state.showModal ? 'block' : 'none'}}>
                                <button className={eventsCss.closeButton} onClick={this.toggleModal}>X</button>
                                <button className={button.buttonsInfo} onClick={() => {
                                    this.setState({showModal: false});
                                    this.handleShowModalAddUserInTeam();
                                    this.props.thisTeamsLoadForEvent(this.props.eventId);
                                }}
                                >Присоединиться к команде
                                </button>
                                <button className={button.buttonsInfo} onClick={() => {
                                    this.setState({showModal: false});
                                    this.handleShowModalCreateTeam();
                                }}
                                >Создать команду
                                </button>
                            </div>)}
                        {this.state.showModal && <div className={eventsCss.overlay}></div>}
                    </div>
                    <div>
                        {this.state.showModalAddUserInTeam && (
                            <div className={`${eventsCss.teams} ${eventsCss.modal} ${eventsCss.newWindowAddEvent}`}
                                 style={{display: this.state.showModalAddUserInTeam ? 'block' : 'none'}}>
                                <button className={eventsCss.closeButton} onClick={this.toggleModalAddUserInTeam}>X
                                </button>
                                <div>
                                    <Dropdown className={`${drop.dropDownDesign}`}>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                                                         className={`${drop.dropdownToggle}`}>
                                            {this.props.selectTeam ? this.props.selectTeam : 'Команда'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                                            {Array.isArray(this.props.myTeams) ? this.props.myTeams && this.props.myTeams.map((item) => (
                                                <Dropdown.Item className={`${drop.dropdownItem}`} key={item.team_id}
                                                               onClick={() => this.handleDropdownSelect(item.name, 'SELECT_TEAM', item.team_id)}>
                                                    {item.name}
                                                </Dropdown.Item>
                                            )) : ""}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <br/>
                                    <button className={button.buttonsInfo} onClick={() => {
                                        this.handleAddUserInTeam(this.props.userID.id, this.props.selectTeamId);
                                    }}
                                    >Присоединиться к команде
                                    </button>
                                </div>
                            </div>)}
                        {this.state.showModalAddUserInTeam && <div className={eventsCss.overlay}></div>}
                    </div>
                    <div>
                        {this.state.showModalCreateTeam && (
                            <div className={`${eventsCss.modal} ${eventsCss.newWindowAddEvent}`}
                                 style={{display: this.state.showModalCreateTeam ? 'block' : 'none'}}>
                                <button className={eventsCss.closeButton} onClick={this.toggleModalCreateTeam}>X
                                </button>
                                <div>
                                    <input
                                        ref={this.state.ref1}
                                        value={this.props.newTeam.name ? this.props.newTeam.name : ""}
                                        className={eventsCss.modalContent} type="text"
                                        placeholder="Название команды"
                                        onChange={this.handleNameChange}/><br/>
                                    <button className={button.buttonsInfo} onClick={() => {
                                        this.handleAddTeam(this.props.eventId, this.props.userID.id);
                                    }}
                                    >Создать команду
                                    </button>
                                </div>
                            </div>)}
                        {this.state.showModalCreateTeam && <div className={eventsCss.overlay}></div>}
                    </div>
                    <div className={eventCss.containerEvent}>
                        <div className={eventCss.row}>
                            {/*<h1>Описание спортивного мероприятия</h1>*/}
                            <div className={eventCss.col}>
                                <div className={eventCss.companyDetails}>
                                    <div className={eventCss.titleAndInfo} id="scroll">
                                        <div className={eventCss.title}>
                                            <div className={eventCss.thumb}>
                                                <img src={this.props.myImage} className={eventCss.imgFluid} alt=""/>
                                            </div>
                                            <div className="title-body">
                                                <a href=""><h4>{this.props.event.nameEvent}&nbsp;</h4></a>
                                                <div className="info">
                                                    &nbsp;
                                                    {this.props.status === 1 ? (
                                                        <div>
                                                            {this.props.event.cntPlayersInGroup > 1 ? (
                                                                <button className={button.buttonsInfo} onClick={() => {
                                                                    this.handleRegistrationTeam()
                                                                }}
                                                                >Зарегистрироваться на турнир
                                                                </button>) : (
                                                                <button className={button.buttonsInfo} onClick={() => {
                                                                    this.handleRegistrationTourney()
                                                                }}
                                                                >Зарегистрироваться на турнир
                                                                </button>)}
                                                            {this.props.event.cntPlayersInGroup > 1 ? (
                                                                <NavLink
                                                                    to={`/../pages/teams/teams.js`}>
                                                                    <button onClick={() => {
                                                                        this.props.thisTeamsLoadForEvent(this.props.eventId)
                                                                    }} className={button.buttonsInfo}>Просмотр
                                                                        команд
                                                                    </button>
                                                                </NavLink>
                                                            ) : (
                                                                <NavLink
                                                                    to={`/../pages/checkingPlayersOnTourney/checkingPlayersOnTourney.js`}>
                                                                    <button onClick={() => {
                                                                        this.props.thisUsersLoadForEvent(this.props.eventId)
                                                                    }} className={button.buttonsInfo}>Просмотр
                                                                        участников
                                                                    </button>
                                                                </NavLink>)}
                                                            {this.props.event.cntPlayersInGroup > 1 ? (
                                                                <NavLink to={`/../pages/resultsTourney/resultsTeam.js`}>
                                                                    <button className={button.buttonsInfo}>Результаты
                                                                    </button>
                                                                </NavLink>
                                                            ) : (
                                                                <NavLink to={`/../pages/resultsTourney/resultsTourney.js`}>
                                                                    <button className={button.buttonsInfo}
                                                                            onClick={() => {
                                                                                this.thisResults(this.props.eventId)}}
                                                                    >Результаты
                                                                    </button>
                                                                </NavLink>)}
                                                            <NavLink to={`/../pages/events/events.js`}>
                                                                <button className={button.buttonsInfo}>Назад</button>
                                                            </NavLink></div>) : (
                                                        <NavLink to={`/../pages/events/events.js`}>
                                                            <button className={button.buttonsInfo}>Назад</button>
                                                        </NavLink>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={eventCss.paddingTop60}>
                                        <div className={eventCss.row}>
                                            <div className={eventCss.colXl7}>
                                                <div className={eventCss.detailsSection}>
                                                    <h4>
                                                        <svg xmlns="" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                            <line x1="17" y1="10" x2="3" y2="10"></line>
                                                            <line x1="21" y1="6" x2="3" y2="6"></line>
                                                            <line x1="21" y1="14" x2="3" y2="14"></line>
                                                            <line x1="17" y1="18" x2="3" y2="18"></line>
                                                        </svg>
                                                        Описание мероприятия
                                                    </h4>
                                                    <div>
                                                        <p><span>{this.props.event.descriptionEvent}</span><br/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${eventCss.colLg4} ${eventCss.information}`}>
                                                <div>
                                                    <h4>Информация</h4>
                                                    <ul>
                                                        <li>
                                                            <span>Дата начала:&nbsp;</span>{this.props.event.dateStart ? dateStrISO(this.props.event.dateStart, DATE_FORMAT_DATE) : ""}
                                                        </li>
                                                        <br/>
                                                        <li>
                                                            <span>Дата окончания:&nbsp;</span>{this.props.event.dateFinish ? dateStrISO(this.props.event.dateFinish, DATE_FORMAT_DATE) : ""}
                                                        </li>
                                                        <br/>
                                                        <li>
                                                        <span>Местоположение:&nbsp;{this.props.event.country ? this.props.event.country : ""} {this.props.event.city ? this.props.event.city : ""}
                                                        </span>
                                                        </li>
                                                        <br/>
                                                        <li>
                                                        <span>Вид спорта:&nbsp;{this.props.event.sport ? this.props.event.sport : ""}&nbsp;
                                                        </span>
                                                        </li>
                                                        <br/>
                                                        <li>
                                                            <span>Пол:&nbsp;{this.props.event.gender ? this.props.event.gender : ""}</span>
                                                        </li>
                                                        <br/>
                                                        <li>
                                                            <span>Возраст от:&nbsp;</span>{this.props.event.minAge ? this.props.event.minAge : ""}
                                                        </li>
                                                        <li>
                                                            <span> &nbsp;до:&nbsp;</span>{this.props.event.maxAge ? this.props.event.maxAge : ""}
                                                        </li>
                                                        <br/>
                                                        <li>
                                                            <span>Число игроков:&nbsp;</span>{this.props.event.cntPlayersInGroup ? this.props.event.cntPlayersInGroup : ""}
                                                        </li>
                                                        <br/>
                                                        <li>
                                                            <span>Организатор:&nbsp;</span>{this.props.event.orgName ? this.props.event.orgName : ""}
                                                        </li>
                                                        <br/>
                                                        <br/>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4>Местоположение на карте</h4>
                                                    <this.LocationMap/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            // window.location.href = "http://localhost:3000/pages/events/events.js"
            return <div>Страница не найдена!</div>
        }
    }
}

export default Event;