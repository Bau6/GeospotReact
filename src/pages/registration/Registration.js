import RegistrationCss from "./RegistrationCss.module.css"
import DropDownMenuReg from "./DropDownMenuReg";
import 'react-datepicker/dist/react-datepicker.css';
import FormFields from "../profile/InfoUserProfile";
import AvatarUpload from "../avatar/avatar";
import {validationsReg} from "../../app/include/validations";
import React, {Component} from 'react';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            initialCheckedState: [],
            refs: [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()],
        };
    }

    componentDidMount() {
        this.props.loadSportsFunc();
        this.props.selectedSportsFunc(Array(this.props.sports.length).fill(false));
        this.props.refsArrayFunc(Array(this.props.sports.length).fill(React.createRef()));
        this.props.checkedFunc(Array(this.props.sports.length).fill(false));
        this.setState(prevState => {
            const newRefs = [...prevState.refs];
            if (newRefs[1].current) {
                newRefs[1].current.type = 'password';
            }
            if (newRefs[2].current) {
                newRefs[2].current.type = 'password';
            }
            return {refs: newRefs};
        });
    }
    handleChange = (e) => {
        // Логика обработки изменения даты
        const inputDate = e.target.value;
        const formattedDate = inputDate
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3');
        this.props.updateText(formattedDate);
        this.setState({date: formattedDate});
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
            for (let i = 0; i < this.props.sports.length; i++) {
                test1.checkedTypeSport[i] = {id: i + 1, status: this.props.refsArray[i].current.value};
            }
            this.props.addData(test1);
            this.props.registrationsLoadDataUser(addDataToDB, this.props.sportsDB);
        } else {
            alert(errorMessage);
            event.preventDefault();
        }
    }

    changeChecked = (index) => {
        const checkedCopy = [...this.props.checked];
        checkedCopy[index] = !checkedCopy[index];
        this.props.checkedFunc({checked: checkedCopy});
        }
        handleDropdownSelect = (eventKey, index, name) => {
            // this.props.selectedSportsFunc(Array(this.props.sports.length).fill(true));
            // this.props.refsArrayFunc(Array(this.props.sports.length).fill(React.createRef()));
            const selectedValuesCopy = [...this.props.sportsDB];
            selectedValuesCopy[index] = eventKey;
            // this.setState( {selectedValues: selectedValuesCopy} );
            this.props.selectedSportsFunc(selectedValuesCopy);
            console.log(this.props.sportsDB)
            }

    // Логика отображения компоненты
    render() {
        const {date} = this.state;
        const inputElementData = ["Дата рождения"].map((labelData, index) => (
            <div key={index}>
                <label className={RegistrationCss.nameLabelInputButtonReg}>{labelData}</label>
                <input ref={this.state.refs[6]} className={RegistrationCss.nameLabelInputButtonReg} type="text"
                       value={date} onChange={this.handleChange} placeholder="dd.mm.yyyy"/>
            </div>
        ));
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
                    <div>
                        {this.props.sports && this.props.sports.map((item, index) => (
                            <div key={index} className={RegistrationCss.checkboxReg}>
                                <label className={RegistrationCss.nameLabelInputButtonReg}>{item.name}</label>
                                <input
                                    ref={this.props.refsArray[index]}
                                    type="checkbox"
                                    checked={this.props.checked[index]}
                                    onChange={() => this.changeChecked(index)}
                                />
                                {this.props.checked[index] ? (
                                    <DropDownMenuReg
                                        index={index}
                                        onDropdownSelect={(eventKey) => this.handleDropdownSelect(eventKey, index, item.name)}
                                    />
                                ) : (
                                    <div>{""}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <AvatarUpload/>
                    <button onClick={this.onAddData} className={RegistrationCss.nameButtonReg}>
                        Сохранить изменения
                    </button>
                </div>
            </div>
        );
    }
}

export default Registration;