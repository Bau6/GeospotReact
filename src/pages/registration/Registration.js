import React, {useState, useEffect} from "react";
import RegistrationCss from "./RegistrationCss.module.css"
import DropDownMenuReg from "./DropDownMenuReg";
import {NavLink} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import FormFields from "../profile/test";
import AvatarUpload from "../avatar/avatar";
import {validationsReg} from "../../app/include/validations";
const USERS = "users";
const Registration = (props) => {
    const [date, setDate] = useState('');
    // debugger;
    const numberOfElements = props.sportNameFromBD.length;
    const initialCheckedState = [];
    // const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество"];
    const labelData = ["Дата рождения"];
    let addDataElement1 = React.createRef();
    let addDataElement2 = React.createRef();
    let addDataElement3 = React.createRef();
    let addDataElement4 = React.createRef();
    let addDataElement5 = React.createRef();
    let addDataElement6 = React.createRef();
    let addDataElement7 = React.createRef();
    const refs = [addDataElement1, addDataElement2, addDataElement3, addDataElement4, addDataElement5, addDataElement6, addDataElement7];
    const [checked, setChecked] = useState(initialCheckedState);
    const [refsArray, setRefsArray] = useState(props.sportNameFromBD.map(() => React.createRef()));




    const handleChange = (e) => {
        const inputDate = e.target.value;
        const formattedDate = inputDate
            .replace(/\D/g, '') // Удаляем все нецифровые символы
            .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3'); // Добавляем разделители между днями, месяцами и годом
        props.updateText(formattedDate);
        setDate(formattedDate);
    }

    const inputElementData = labelData.map((labelData, index) => (
        <div key={index}>
            <label className={RegistrationCss.nameLabelInputButtonReg}>
                {labelData}
            </label>
            <input
                ref={refs[6]}
                className={RegistrationCss.nameLabelInputButtonReg}
                type="text"
                value={date}
                onChange={handleChange}
                placeholder="dd.mm.yyyy"
            />
        </div>
    ));

    for (let i = 0; i < numberOfElements; i++) {
        initialCheckedState.push(false);
    }

    const handleDropdownSelect = (eventKey, index) => {
        const newRefsArray = [...refsArray];
        // Добавить eventKey в массив refsArray
        newRefsArray[index].current.value = eventKey;
        setRefsArray(newRefsArray);
    };


    let onAddData = (event) => {
        let errorMessage = '';
        errorMessage = validationsReg(refs);
        if (errorMessage === '') {
            let test1 = {
                email: props.userExampleInfo.email,
                password: props.userExampleInfo.password,
                replayPassword: props.userExampleInfo.replayPassword,
                nameUser: props.userExampleInfo.nameUser,
                surnameUser: props.userExampleInfo.surnameUser,
                patronymicUser: props.userExampleInfo.patronymicUser,
                dateOfBirth: props.userExampleInfo.dateOfBirth,
                checkedTypeSport: {}
            };
            let addDataToDB = {
                email: props.userExampleInfo.email,
                password: props.userExampleInfo.password,
                name: props.userExampleInfo.nameUser,
                surname: props.userExampleInfo.surnameUser,
                patronymic: props.userExampleInfo.patronymicUser,
                birthday: props.userExampleInfo.dateOfBirth
            };

            for (let i = 0; i < numberOfElements; i++) {
                test1.checkedTypeSport[i] = {
                    id: i + 1,
                    status: refsArray[i].current.value
                };
            }
            props.addData(test1);
            props.loginUser();
            const nameTable = USERS;
            const params = addDataToDB; // данные для добавления
            props.addDataDb(nameTable, params);
        } else {
            alert(errorMessage);
            event.preventDefault();
            // Действия в случае некорректных данных
        }
        //вывод на экран значения
    }

    let changeChecked = (index) => {
        setChecked(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            const newRefsArray = [...refsArray];
            newRefsArray[index].current.value = 1;
            setRefsArray(newRefsArray);
            return newState;
        });
    }

    return (
        <div>
            <div>
                <div className={RegistrationCss.RegistrationName}>
                    Регистрация
                </div>
                <div className={RegistrationCss.containerReg}>
                    <FormFields
                        myInf={props.myInf}
                        refs={refs}
                        onEmailChange={props.onEmailChange}
                        onPassChange={props.onPassChange}
                        onRepassChange={props.onRepassChange}
                        onNameChange={props.onNameChange}
                        onSurnameChange={props.onSurnameChange}
                        onPatronymicChange={props.onPatronymicChange}
                    />
                    {inputElementData}
                </div>
            </div>
            <div>
                {props.sportNameFromBD && props.sportNameFromBD.map((item, index) => (
                    <div key={index} className={RegistrationCss.checkboxReg}>
                        <label className={RegistrationCss.nameLabelInputButtonReg}>
                            {item.name}
                        </label>
                        <input
                            ref={refsArray[index]}
                            type="checkbox"
                            checked={checked[index]}
                            onChange={() => changeChecked(index)}
                        />
                        {checked[index] ?
                            <DropDownMenuReg index={index}
                                             onDropdownSelect={(eventKey) => handleDropdownSelect(eventKey, index)}/> :
                            <div> {""} </div>}
                    </div>
                ))}
            </div>
            <div><AvatarUpload/></div>
            <NavLink onClick={onAddData} className={RegistrationCss.nameButtonReg}
                     to="/../../pages/profile/profile.js">Сохранить изменения</NavLink>

        </div>);
}

export default Registration;