import React, {useEffect, useState} from 'react';
import "./changeInfProfile.css";
import RegistrationCss from "../registration/RegistrationCss.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import FormFields from "./test";
const ProfilePage = (props) => {
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество", "", "", "Город", "Страна"];
    // const labelData = ["Дата рождения"];
    const refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    const [editMode, setEditMode] = useState(false);
    const [users, setUsers] = useState([]);

    const params = props.sessionUser.userID.id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3003/output-one-record", {
                    params: {
                        nameTable: 'users',
                        params:  params  // Параметры, если необходимо
                    }
                });
                setUsers(response.data);
                // console.log(users);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);



    const handleCancelClick = () => {
        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
            props.onEmailChange(users.email);
            props.onNameChange(users.name);
            props.onSurnameChange(users.surname);
            props.onPatronymicChange(users.patronymic);

    };

    const countryChange = () => {
        let newText = refs[8].current.value;
        props.onCountryChange(newText);
    }

    const cityChange = () => {
        let newText = refs[9].current.value;
        props.onCityChange(newText);
    }

    return (
        <div>
            {editMode ? (
                <div>
                    <div>
                        <div>
                            <div className={RegistrationCss.RegistrationName}>
                                Изменение информации
                            </div>
                            <div className={RegistrationCss.containerReg}>
                                <div>
                                    <FormFields
                                        myInf={props.myInf}
                                        refs={refs}
                                        users={users}
                                        onEmailChange={props.onEmailChange}
                                        onPassChange={props.onPassChange}
                                        onRepassChange={props.onRepassChange}
                                        onNameChange={props.onNameChange}
                                        onSurnameChange={props.onSurnameChange}
                                        onPatronymicChange={props.onPatronymicChange}
                                    />
                                    <div>
                                        <label className={RegistrationCss.nameLabelInputButtonReg}>
                                            {labels[8]}
                                        </label>
                                        <input
                                            ref={refs[8]}
                                            className={RegistrationCss.nameLabelInputButtonReg}
                                            onChange={countryChange}>
                                        </input>
                                    </div>
                                    <div>
                                        <label className={RegistrationCss.nameLabelInputButtonReg}>
                                            {labels[9]}
                                        </label>
                                        <input
                                            ref={refs[9]}
                                            className={RegistrationCss.nameLabelInputButtonReg}
                                            onChange={cityChange}>
                                        </input>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <NavLink onClick={() => {
                    }} className={RegistrationCss.nameButtonReg}
                             to="/../../pages/profile/profile.js">Сохранить изменения</NavLink>
                    <button className={RegistrationCss.nameButtonReg}>Изменить аватар</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <div>
                    {/*<p>Name: {formData.firstName} {formData.lastName} {formData.patronymic}</p>*/}
                    {/*<p>Password: {formData.password}</p>*/}
                    <button onClick={handleEditClick}>Edit Information</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;