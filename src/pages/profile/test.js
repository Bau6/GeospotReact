import React from 'react';
import RegistrationCss from "../registration/RegistrationCss.module.css";

const FormFields = ({
                        myInf,
                        refs,
                        onEmailChange,
                        onPassChange,
                        onRepassChange,
                        onNameChange,
                        onSurnameChange,
                        onPatronymicChange
                    }) => {
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество", "", "", "Страна", "Город"];
    const emailChange = () => {
        debugger
        let newText = refs[0].current.value;
        onEmailChange(newText);
    }
    const passChange = () => {
        let newText = refs[1].current.value;
        onPassChange(newText);
    }

    const repassChange = () => {
        let newText = refs[2].current.value;
        onRepassChange(newText);
    }
    const nameChange = () => {
        let newText = refs[3].current.value;
        onNameChange(newText);
    }
    const surnameChange = () => {
        let newText = refs[4].current.value;
        onSurnameChange(newText);
    }
    const patronymicChange = () => {
        let newText = refs[5].current.value;
        onPatronymicChange(newText);
    }

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
                    ref={refs[1]}
                    className={RegistrationCss.nameLabelInputButtonReg}
                    onChange={passChange}>
                </input>
            </div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[2]}
                </label>
                <input
                    ref={refs[2]}
                       className={RegistrationCss.nameLabelInputButtonReg}
                       onChange={repassChange}>
                </input>
            </div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[3]}
                </label>
                <input
                    ref={refs[3]}
                       className={RegistrationCss.nameLabelInputButtonReg}
                       onChange={nameChange}
                    value={myInf.nameUser}>

                </input>
            </div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[4]}
                </label>
                <input
                    ref={refs[4]}
                       className={RegistrationCss.nameLabelInputButtonReg}
                       onChange={surnameChange}
                    value={myInf.surnameUser}>

                </input>
            </div>
            <div>
                <label className={RegistrationCss.nameLabelInputButtonReg}>
                    {labels[5]}
                </label>
                <input
                    ref={refs[5]}
                       className={RegistrationCss.nameLabelInputButtonReg}
                       onChange={patronymicChange}
                    value={myInf.patronymicUser}>

                </input>
            </div>

        </div>
    );
};

export default FormFields;