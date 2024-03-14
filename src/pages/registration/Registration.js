import React, {useState, useEffect} from "react";
import RegistrationCss from "./RegistrationCss.module.css"
import DropDownMenuReg from "./DropDownMenuReg";
import {NavLink} from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ShowPasswordButton from "./passwordButton";


const Registration = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const numberOfElements = props.sportNameFromBD.length;
    const initialCheckedState = [];
    const labels = ["Почта", "Пароль", "Подтверждение пароля", "Имя", "Фамилия", "Отчество"];
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

    useEffect(() => {
        if (refs[1].current) {
            refs[1].current.type = 'password';
        }
        if (refs[2].current) {
            refs[2].current.type = 'password';
        }
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
        return passwordRegex.test(password);
    }

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Zа-яА-Я]{3,50}$/;
        return nameRegex.test(name);
    }

    const validatePatronymic = (patronymic) => {
        if (patronymic) {
            const patronymicRegex = /^[a-zA-Zа-яА-Я]{3,50}$/;
            return patronymicRegex.test(patronymic);
        }
        return true; // Если отчество не введено, то считаем его валидным
    }

    const inputElementData = labelData.map((labelData, index) => (
        <div key={index}>

            <label className={RegistrationCss.nameLabelInputButtonReg}>
                {labelData}
            </label>
            <DatePicker
                ref={refs[6]}
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                className={RegistrationCss.nameLabelInputButtonReg}
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


    let addData = (event) => {
        let test1 = {
            checkedTypeSport: []
        };
        let errorMessage = "";

        if (!validateEmail(addDataElement1.current.value)) {
            errorMessage += "Пожалуйста, введите корректный Email.\n";
        }
        if (!validatePassword(addDataElement2.current.value)) {
            errorMessage += "Пароль должен содержать от 6 до 20 символов, включать латинские буквы нижнего и верхнего регистров, а также цифры.\n";
        }
        if (addDataElement2.current.value !== addDataElement3.current.value) {
            errorMessage += "Пароли не совпадают.\n";
        }
        if (!validateName(addDataElement4.current.value)) {
            errorMessage += "Имя должно содержать от 3 до 50 символов и состоять из русских или английских букв.\n";
        }
        if (!validateName(addDataElement5.current.value)) {
            errorMessage += "Фамилия должна содержать от 3 до 50 символов и состоять из русских или английских букв.\n";
        }
        if (!validatePatronymic(addDataElement6.current.value)) {
            errorMessage += "Отчество должно содержать от 3 до 50 символов и состоять из русских или английских букв, или может отсутствовать.\n";
        }
        if (!addDataElement7.current.props.selected) {
            errorMessage += "Укажите дату рождения\n";
        }
        if (errorMessage === "") {
            test1.email = addDataElement1.current.value;
            test1.password = addDataElement2.current.value;
            test1.replayPassword = addDataElement3.current.value;
            test1.nameUser = addDataElement4.current.value;
            test1.surnameUser = addDataElement5.current.value;
            test1.patronymicUser = addDataElement6.current.value;
            test1.dateOfBirth = addDataElement7.current.props.selected;
            test1.checkedTypeSport = {};
            for (let i = 0; i < numberOfElements; i++) {
                test1.checkedTypeSport[i] = {
                    id: i + 1,
                    status: refsArray[i].current.value
                };
            }
            //props.infoForRegUser(test1);
            props.dispatch({ type: 'INFO-FOR-REG-USER', test1 });
            // Дополнительные действия при корректных данных
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

    let onEmailChange = () => {
        let newText = refs[0].current.value;
        //props.updateNewEmailText(text);
        props.dispatch({ type: 'EMAIL' , newText});
    }

    let onPassChange = () => {
        let newText = refs[1].current.value;
        //props.updateNewPassText(text);
        props.dispatch({ type: 'PASSWORD', newText });
    }

    let onRepassChange = () => {
        let newText = refs[2].current.value;
        //props.updateNewRepassText(text);
        props.dispatch({ type: 'REPASS', newText });
    }

    let onNameChange = () => {
        let newText = refs[3].current.value;
        //props.updateNewNameText(text);
        props.dispatch({ type: 'NAME-USER', newText });
    }

    let onSurnameChange = () => {
        let newText = refs[4].current.value;
        //props.updateNewSurnameText(text);
        props.dispatch({ type: 'SURNAME-USER', newText });
    }

    let onPatronymicChange = () => {
        let newText = refs[5].current.value;
        //props.updateNewPatronymicText(text);
        props.dispatch({ type: 'PATRONYMIC-USER', newText });
    }

    return (<div>
        <div>
            <div className={RegistrationCss.RegistrationName}>
                Регистрация
            </div>
            <div className={RegistrationCss.containerReg}>
                <div>
                    <label className={RegistrationCss.nameLabelInputButtonReg}>
                        {labels[0]}
                    </label>
                    <input
                        onChange={onEmailChange}
                        ref={refs[0]}
                        className={RegistrationCss.nameLabelInputButtonReg}
                        // value={props.stateFromBD.userExampleInfo.email}
                        >
                    </input>
                </div>
                <div>
                    <label className={RegistrationCss.nameLabelInputButtonReg}>
                        {labels[1]}
                    </label>
                    <input ref={refs[1]}
                           className={RegistrationCss.nameLabelInputButtonReg}
                           // value={props.stateFromBD.userExampleInfo.password}>
                           onChange={onPassChange}></input>
                    <ShowPasswordButton getRef={() => refs[1]}/>
                </div>
                <div>
                    <label className={RegistrationCss.nameLabelInputButtonReg}>
                        {labels[2]}
                    </label>
                    <input ref={refs[2]}
                           className={RegistrationCss.nameLabelInputButtonReg}
                           // value={props.stateFromBD.userExampleInfo.replayPassword}>
                           onChange={onRepassChange}></input>
                    <ShowPasswordButton getRef={() => refs[2]}/>
                </div>
                <div>
                    <label className={RegistrationCss.nameLabelInputButtonReg}>
                        {labels[3]}
                    </label>
                    <input ref={refs[3]}
                           className={RegistrationCss.nameLabelInputButtonReg}
                           // value={props.stateFromBD.userExampleInfo.nameUser}>
                           onChange={onNameChange}></input>
                </div>
                <div>
                    <label className={RegistrationCss.nameLabelInputButtonReg}>
                        {labels[4]}
                    </label>
                    <input ref={refs[4]}
                           className={RegistrationCss.nameLabelInputButtonReg}
                           // value={props.stateFromBD.userExampleInfo.surnameUser}>
                           onChange={onSurnameChange}></input>
                </div>
                <div>
                    <label className={RegistrationCss.nameLabelInputButtonReg}>
                        {labels[5]}
                    </label>
                    <input ref={refs[5]}
                           className={RegistrationCss.nameLabelInputButtonReg}
                           // value={props.stateFromBD.userExampleInfo.patronymicUser}>
                           onChange={onPatronymicChange}></input>
                </div>
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
                        <DropDownMenuReg index={index} onDropdownSelect={(eventKey) => handleDropdownSelect(eventKey, index)}/> :
                        <div> {""} </div>}
                </div>
            ))}
        </div>
        <NavLink onClick={addData} className={RegistrationCss.nameButtonReg}
                 to="/../../pages/profile/profile.js">Сохранить изменения</NavLink>
        <button className={RegistrationCss.nameButtonReg}>Изменить аватар</button>
    </div>)
}

export default Registration;