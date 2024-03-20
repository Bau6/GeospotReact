import React, {useState, useEffect} from "react";
import RegistrationCss from "./RegistrationCss.module.css"
import DropDownMenuReg from "./DropDownMenuReg";
import {NavLink} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import ShowPasswordButton from "./passwordButton";
import {validationsReg} from "../../app/include/validations";

const Registration = (props) => {
    const [date, setDate] = useState('');
    // debugger;
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
    }, [refs]);


    const handleChange = (e) => {
        const inputDate = e.target.value;
        const formattedDate = inputDate
            .replace(/\D/g, '') // Удаляем все нецифровые символы
            .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3'); // Добавляем разделители между днями, месяцами и годом
        props.updateText(formattedDate);
        // props.dispatch(onDateChangeActionCreator( formattedDate ));
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
        let errorMessage = validationsReg(refs);
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

            for (let i = 0; i < numberOfElements; i++) {
                test1.checkedTypeSport[i] = {
                    id: i + 1,
                    status: refsArray[i].current.value
                };
            }
            props.addData(test1);
            // props.dispatch(changeRegDataActionCreator(test1));
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
            <NavLink onClick={onAddData} className={RegistrationCss.nameButtonReg}
                     to="/../../pages/profile/profile.js">Сохранить изменения</NavLink>
            <button className={RegistrationCss.nameButtonReg}>Изменить аватар</button>
        </div>);
}

export default Registration;