import React, { useState } from 'react';
import "./changeInfProfile.css";
import RegistrationCss from "../registration/RegistrationCss.module.css";
import ShowPasswordButton from "../registration/passwordButton";
import DropDownMenuReg from "../registration/DropDownMenuReg";
import {NavLink} from "react-router-dom";
const ProfilePage = (props) => {
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество"];
    const labelData = ["Дата рождения"];
    const refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName: props.userInf[0].nameUser,
        lastName: props.userInf[0].nameUser,
        patronymic: props.userInf[0].nameUser,
        password: props.userInf[0].nameUser,
        repeatPassword: props.userInf[0].nameUser,
        avatar: ''
    });

    const handleCancelClick = () => {
        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    let emailChange = () => {
        let newText = refs[0].current.value;
        props.onEmailChange(newText);
    }

    let passChange = () => {
        let newText = refs[1].current.value;
        props.onPassChange(newText);
    }

    let repassChange = () => {
        let newText = refs[2].current.value;
        props.onRepassChange(newText);
    }

    let nameChange = () => {
        let newText = refs[3].current.value;
        props.onNameChange(newText);
    }

    let surnameChange = () => {
        let newText = refs[4].current.value;
        props.onSurnameChange(newText);
    }

    let patronymicChange = () => {
        let newText = refs[5].current.value;
        props.onPatronymicChange(newText);
    }

    return (
        <div>
            {editMode ? (
                <div>
                    <div>
                        <div className={RegistrationCss.RegistrationName}>
                            Изменение информации
                        </div>
                        <div className={RegistrationCss.containerReg}>
                            <div>
                                <label className={RegistrationCss.nameLabelInputButtonReg}>
                                    {labels[0]}
                                </label>
                                <input
                                    onChange={emailChange}
                                    ref={refs[0]}
                                    className={RegistrationCss.nameLabelInputButtonReg}
                                >
                                </input>
                            </div>
                            <div>
                                <label className={RegistrationCss.nameLabelInputButtonReg}>
                                    {labels[1]}
                                </label>
                                <input ref={refs[1]}
                                       className={RegistrationCss.nameLabelInputButtonReg}
                                       onChange={passChange}></input>
                                <ShowPasswordButton getRef={() => refs[1]}/>
                            </div>
                            <div>
                                <label className={RegistrationCss.nameLabelInputButtonReg}>
                                    {labels[2]}
                                </label>
                                <input ref={refs[2]}
                                       className={RegistrationCss.nameLabelInputButtonReg}
                                       onChange={repassChange}></input>
                                <ShowPasswordButton getRef={() => refs[2]}/>
                            </div>
                            <div>
                                <label className={RegistrationCss.nameLabelInputButtonReg}>
                                    {labels[3]}
                                </label>
                                <input ref={refs[3]}
                                       className={RegistrationCss.nameLabelInputButtonReg}
                                       onChange={nameChange}></input>
                            </div>
                            <div>
                                <label className={RegistrationCss.nameLabelInputButtonReg}>
                                    {labels[4]}
                                </label>
                                <input ref={refs[4]}
                                       className={RegistrationCss.nameLabelInputButtonReg}
                                       onChange={surnameChange}></input>
                            </div>
                            <div>
                                <label className={RegistrationCss.nameLabelInputButtonReg}>
                                    {labels[5]}
                                </label>
                                <input ref={refs[5]}
                                       className={RegistrationCss.nameLabelInputButtonReg}
                                       onChange={patronymicChange}></input>
                            </div>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    {props.sportNameFromBD && props.sportNameFromBD.map((item, index) => (*/}
                    {/*        <div key={index} className={RegistrationCss.checkboxReg}>*/}
                    {/*            <label className={RegistrationCss.nameLabelInputButtonReg}>*/}
                    {/*                {item.name}*/}
                    {/*            </label>*/}
                    {/*            <input*/}
                    {/*                ref={refsArray[index]}*/}
                    {/*                type="checkbox"*/}
                    {/*                checked={checked[index]}*/}
                    {/*                onChange={() => changeChecked(index)}*/}
                    {/*            />*/}
                    {/*            {checked[index] ?*/}
                    {/*                <DropDownMenuReg index={index} onDropdownSelect={(eventKey) => handleDropdownSelect(eventKey, index)}/> :*/}
                    {/*                <div> {""} </div>}*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    <NavLink onClick={()=>{}} className={RegistrationCss.nameButtonReg}
                             to="/../../pages/profile/profile.js">Сохранить изменения</NavLink>
                    <button className={RegistrationCss.nameButtonReg}>Изменить аватар</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>Name: {formData.firstName} {formData.lastName} {formData.patronymic}</p>
                    <p>Password: {formData.password}</p>
                    <button onClick={handleEditClick}>Edit Information</button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;