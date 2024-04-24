import React from 'react';
import "./changeInfProfile.css";
import RegistrationCss from "../registration/RegistrationCss.module.css";
import {NavLink} from "react-router-dom";
import FormFields from "./test";
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество", "", "", "Город", "Страна"];
        // this.labelData = ["Дата рождения"];
        this.reffs = {};
        this.labels.forEach(label => {
            this.reffs[label] = React.createRef();
        });
        this.state = {
            editMode: false,
            users: []
        };
    }
    componentDidMount() {
        this.props.UserLocation(window.location.href, this.props.sessionUser.userID.id);
    }
    handleCancelClick = () => {
        this.setState({ editMode: false });
    };

    handleEditClick = () => {
        this.setState({ editMode: true });
        this.props.onEmailChange(this.state.users.email);
        this.props.onNameChange(this.state.users.name);
        this.props.onSurnameChange(this.state.users.surname);
        this.props.onPatronymicChange(this.state.users.patronymic);
    };

    countryChange = () => {
        let newText = this.reffs[8].current.value;
        this.props.onCountryChange(newText);
    };

    cityChange = () => {
        let newText = this.reffs[9].current.value;
        this.props.onCityChange(newText);
    };

    render() {
        console.log(this.props.userInf);
        return (
            <div>
                {this.state.editMode ? (
                        <div>
                            <div>
                                <div>
                                    <div className={RegistrationCss.RegistrationName}>
                                        Изменение информации
                                    </div>
                                    <div className={RegistrationCss.containerReg}>
                                        <FormFields
                                            myInf={this.props.userInf}
                                            refs={this.reffs}
                                            users={this.state.users}
                                            onEmailChange={this.props.onEmailChange}
                                            onPassChange={this.props.onPassChange}
                                            onRepassChange={this.props.onRepassChange}
                                            onNameChange={this.props.onNameChange}
                                            onSurnameChange={this.props.onSurnameChange}
                                            onPatronymicChange={this.props.onPatronymicChange}
                                        />
                                        <div>
                                            <label className={RegistrationCss.nameLabelInputButtonReg}>
                                                {this.labels[8]}
                                            </label>
                                            <input
                                                ref={this.reffs[8]}
                                                className={RegistrationCss.nameLabelInputButtonReg}
                                                onChange={this.countryChange}
                                            />
                                        </div>
                                        <div>
                                            <label className={RegistrationCss.nameLabelInputButtonReg}>
                                                {this.labels[9]}
                                            </label>
                                            <input
                                                ref={this.reffs[9]}
                                                className={RegistrationCss.nameLabelInputButtonReg} onChange={this.cityChange}
                                            />
                                    </div>
                                </div>

                            </div>
                        </div>
                    <NavLink onClick={() => {
                    }} className={RegistrationCss.nameButtonReg}
                             to="/../../pages/profile/profile.js">Сохранить изменения</NavLink>
                    <button className={RegistrationCss.nameButtonReg}>Изменить аватар</button>
                    <button onClick={this.handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <div>
                    {/*<p>Name: {formData.firstName} {formData.lastName} {formData.patronymic}</p>*/}
                    {/*<p>Password: {formData.password}</p>*/}
                    <button onClick={this.handleEditClick}>Edit Information</button>
                </div>
            )}
        </div>
    )}
}

export default ProfilePage;