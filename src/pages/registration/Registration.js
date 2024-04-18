// import React, {useState, useEffect} from "react";
import RegistrationCss from "./RegistrationCss.module.css"
import DropDownMenuReg from "./DropDownMenuReg";
import {Navigate} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import FormFields from "../profile/test";
import AvatarUpload from "../avatar/avatar";
import {validationsReg} from "../../app/include/validations";
import React, {Component} from 'react';
import axios from "axios";
const USERS = "users";
const TABLE_SPORTS = "sporttype";
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToProfile: false,
            date: '',
            initialCheckedState: [],
            refs: [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()],
            checked: [],
            refsArray: this.props.sportNameFromBD.map(() => React.createRef())
        };
    }

    componentDidMount() {
        this.setState(prevState => {
            const newRefs = [...prevState.refs];
            if (newRefs[1].current) {
                newRefs[1].current.type = 'password';
            }
            if (newRefs[2].current) {
                newRefs[2].current.type = 'password';
            }
            return { refs: newRefs };
        });

            axios.get('http://localhost:3003/output-table', {
                params: {
                    nameTable: TABLE_SPORTS,
                    params: {}
                }
            })
                .then(response => {
                    this.props.loadSports(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
    }

    handleChange = (e) => {
        // Логика обработки изменения даты
        const inputDate = e.target.value;
        const formattedDate = inputDate
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3');
        this.props.updateText(formattedDate);
        this.setState({ date: formattedDate });
    }

    handleDropdownSelect = (eventKey, index) => {
        // Логика выбора элемента в Dropdown
        const newRefsArray = [...this.state.refsArray];
        newRefsArray[index].current.value = eventKey;
        this.setState({ refsArray: newRefsArray });
    }
    onAddData = (event) => {
        // Логика добавления данных
        let errorMessage = "";
        errorMessage = validationsReg(this.state.refs);
        if (errorMessage === '') {
            let test1 = {
                email: this.props.userExampleInfo.email,
                password: this.props.userExampleInfo.password,
                replayPassword: this.props.userExampleInfo.replayPassword,
                nameUser: this.props.userExampleInfo.nameUser,
                surnameUser: this.props.userExampleInfo.surnameUser,
                patronymicUser: this.props.userExampleInfo.patronymicUser,
                dateOfBirth: this.props.userExampleInfo.dateOfBirth,
                checkedTypeSport: {}
            };
            let addDataToDB = {
                email: this.props.userExampleInfo.email,
                password: this.props.userExampleInfo.password,
                name: this.props.userExampleInfo.nameUser,
                surname: this.props.userExampleInfo.surnameUser,
                patronymic: this.props.userExampleInfo.patronymicUser,
                birthday: this.props.userExampleInfo.dateOfBirth
            };
            for (let i = 0; i < this.props.sportNameFromBD.length; i++) {
                test1.checkedTypeSport[i] = { id: i + 1, status: this.state.refsArray[i].current.value };
            }
            this.props.addData(test1);
            axios.post("http://localhost:3003/add-record", {
                nameTable: USERS,
                params: addDataToDB
            })
                .then(response => {
                    alert("Вы успешно зарегистрированы!");
                    this.props.loginUser();
                    this.props.setSession(true);
                    this.setState(
                        { redirectToProfile: true });
                })
                .catch(error => {
                    if (error.response.data.error) {
                        alert(error.response.data.error);
                    } else {
                        alert("An error occurred");
                    }
                });
        } else {
            alert(errorMessage);
            event.preventDefault();
        }
    }

    changeChecked = (index) => {
        // Логика изменения состояния checked
        this.setState(prevState => {
            const newState = [...prevState.checked];
            newState[index] = !newState[index];
            const newRefsArray = [...this.state.refsArray];
            newRefsArray[index].current.value = 1;
            this.setState({ checked: newState, refsArray: newRefsArray });
        });
    }

    // Логика отображения компоненты
    render() {
        const {date, refsArray, checked} = this.state;
        const {sportNameFromBD} = this.props;

        const inputElementData = ["Дата рождения"].map((labelData, index) => (
            <div key={index}>
                <label className={RegistrationCss.nameLabelInputButtonReg}>{labelData}</label>
                <input ref={this.state.refs[6]} className={RegistrationCss.nameLabelInputButtonReg} type="text"
                       value={date} onChange={this.handleChange} placeholder="dd.mm.yyyy"/>
            </div>
        ));
        if (this.state.redirectToProfile) {
            return <Navigate to="/../../pages/profile/Profile.js" />;
        }
        return (
            <div>
                <div>
                    <div className={RegistrationCss.RegistrationName}>Регистрация</div>
                    <div className={RegistrationCss.containerReg}>
                        <FormFields
                            myInf={this.props.myInf}
                            refs={this.state.refs}
                            onEmailChange={this.props.onEmailChange}
                            onPassChange={this.props.onPassChange}
                            onRepassChange={this.props.onRepassChange}
                            onNameChange={this.props.onNameChange}
                            onSurnameChange={this.props.onSurnameChange}
                            onPatronymicChange={this.props.onPatronymicChange}
                        />
                        {inputElementData}
                    </div>
                </div>
                <div>
                    {sportNameFromBD && sportNameFromBD.map((item, index) => (
                        <div key={index} className={RegistrationCss.checkboxReg}>
                            <label className={RegistrationCss.nameLabelInputButtonReg}>{item.name}</label>
                            <input ref={refsArray[index]} type="checkbox" checked={checked[index]}
                                   onChange={() => this.changeChecked(index)}/>
                            {checked[index] ? <DropDownMenuReg index={index}
                                                               onDropdownSelect={(eventKey) => this.handleDropdownSelect(eventKey, index)}/> :
                                <div> {""} </div>}
                        </div>
                    ))}
                </div>
                <div>
                    <AvatarUpload/>
                    {/*<NavLink onClick={this.onAddData} className={RegistrationCss.nameButtonReg}*/}
                    {/*         to="/../../pages/profile/profile.js">Сохранить изменения</NavLink>*/}
                    <button onClick={this.onAddData} className={RegistrationCss.nameButtonReg}>
                        Сохранить изменения
                    </button>
                </div>
            </div>
        );
    }
}

export default Registration;