import React from 'react';
import RegistrationCss from "../registration/RegistrationCss.module.css";
const FormFields = ({myInf, refs, users, onEmailChange, onPassChange, onRepassChange, onNameChange, onSurnameChange, onPatronymicChange }) => {
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество"];
    const emailChange = () => {

        let newText = refs[0].current.value;
        onEmailChange(newText);
    }
    console.log(myInf);
    const passChange = () => {
        let newText = refs[1].current.value;
        onPassChange(newText);
    }

    // const repassChange = () => {
    //     let newText = refs[2].current.value;
    //     onRepassChange(newText);
    // }
    // const nameChange = () => {
    //     let newText = refs[3].current.value;
    //     onNameChange(newText);
    // }
    // const surnameChange = () => {
    //     let newText = refs[4].current.value;
    //     onSurnameChange(newText);
    // }
    // const patronymicChange = () => {
    //     let newText = refs[5].current.value;
    //     onPatronymicChange(newText);
    // }

    return (
        <div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[0]}
                </label>
                <input
                    onChange={emailChange}
                    ref={refs[0]}
                    className={RegistrationCss.nameLabelInputButtonReg}
                    value={myInf.email}
                >
                </input>
            </div>

            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[1]}
                </label>
                <input
                    onChange={passChange}
                    ref={refs[1]}
                    className={RegistrationCss.nameLabelInputButtonReg}
                >
                </input>
            </div>
        </div>
    );
};

export default FormFields;