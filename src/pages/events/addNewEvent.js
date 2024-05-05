import eventsCss from "./events.module.css";
import React from "react";
import {Dropdown} from "react-bootstrap";
import button from "../../assets/css/button.module.css";
import drop from "../../assets/css/dropDown.module.css";

class addNewEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            ref1: React.createRef(),
            ref2: React.createRef(),
            ref3: React.createRef(),
            ref4: React.createRef(),
            ref5: React.createRef(),
            ref7: React.createRef(),
            ref6: React.createRef(),
            ref8: React.createRef(),
        };
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal});
        if (this.state.showModal === false) {
            this.props.clearAreaText();
        }
    };
    handleNameChange = () => {
        if (!!this.state.ref1) {
            let newText = this.state.ref1.current.value;
            // this.state.myNewEvent.name = newText;
            this.props.onChangeAreaText("NAME", newText);
        }
    }
    handleStartDateChange = () => {
        let newText = this.state.ref2.current.value;
        // this.state.myNewEvent.dateStart = newText;
        this.props.onChangeAreaText("DATE_START", newText);
    }
    handleEndDateChange = () => {
        let newText = this.state.ref3.current.value;
        // this.state.myNewEvent.dateFinish = newText;
        this.props.onChangeAreaText("DATE_END", newText);
    }
    handleChange = () => {
        if (!!this.state.ref1) {
            let newText = this.state.ref4.current.value;
            this.props.onChangeAreaText("NAME", newText);
        }
    }
    handleCityChange = () => {
        let newText = this.ref5.current.value;
        this.newNew.city = newText;
        this.props.onChangeAreaText("CITY", newText);
    }
    descriptionChange = () => {
        let newText = this.ref7.current.value;
        this.newNew.textPub = newText;
        this.props.onChangeAreaText("DESCRIPTION", newText);
    }
    imageChange = () => {
        let newText = this.ref8.current.value;
        this.newNew.image = newText;
        this.props.onChangeAreaText("IMAGE", newText);
    }

    handleSave = () => {
        // Добавить логику для сохранения данных
        console.log('Город:', this.state.city);
        console.log('Дата начала:', this.state.startDate);
        console.log('Дата конца:', this.state.endDate);

        // Закрыть модальное окно после сохранения
        this.toggleModal();
    };

    componentDidMount() {
        if (this.state.showModal === false) {
            this.props.clearAreaText();
        }
    }

    handleDropdownSelect = (value, type, id) => {
        if (type === 'country') {
            // this.setState({ selectedCountry: value, selectedCity: null, selectedCountryId: id });
            this.props.onChangeAreaText("COUNTRY_ID", id);
            this.props.onChangeAreaText("COUNTRY", value);
        } else if (type === 'city') {
            // this.setState({ selectedCity: value });
            this.props.onChangeAreaText("CITY_ID", id);
            this.props.onChangeAreaText("CITY", value);
        } else if (type === 'sport') {
            // this.setState({ selectedSport: value });
            this.props.onChangeAreaText("SPORT_ID", id);
            this.props.onChangeAreaText("SPORT", value);
        } else if (type === 'gender') {
            // this.setState({ selectedSport: value });
            this.props.onChangeAreaText("GENDER_ID", id);
            this.props.onChangeAreaText("GENDER", value);
        }
    };
    render() {
        if (this.props.role === "organizer" || this.props.role === "admin") {
        return (
            <div>
                <div>
                    <button className={`${eventsCss.addBtn} ${button.buttonsInfo}`} onClick={this.toggleModal} >Добавить запись</button>
                    {this.state.showModal && (
                        <div className={eventsCss.modal}
                             style={{display: this.state.showModal ? 'block' : 'none'}}>
                            <input ref={this.state.ref1}
                                   value={this.props.thisNewEvent.name ? this.props.thisNewEvent.name : ""}
                                   className={eventsCss.modalContent} type="text"
                                   placeholder="Наименование мероприятия"
                                   onChange={this.handleNameChange}/><br/>
                            <input value={this.props.userID.name ? this.props.userID.name : ""}
                                   className={eventsCss.modalContent} type="text"
                                   placeholder="Автор"
                                   onChange={() => {
                                   }}/><br/>
                            <Dropdown className={`${drop.dropDownDesign}`}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                                 className={`${drop.dropdownToggle}`}>
                                    {this.props.thisNewEvent.country ? this.props.thisNewEvent.country : 'Страна'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                                    {Array.isArray(this.props.countries) ? this.props.countries && this.props.countries.map((item) => (
                                        <Dropdown.Item className={`${drop.dropdownItem}`} key={item.id}
                                                       onClick={() => this.handleDropdownSelect(item.country, 'country', item.id)}>
                                            {item.country}
                                        </Dropdown.Item>
                                    )) : ""}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className={`${drop.dropDownDesign}`}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                                 className={`${drop.dropdownToggle}`}>
                                    {this.props.thisNewEvent.city ? this.props.thisNewEvent.city : 'Город'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                                    {Array.isArray(this.props.cities) ? this.props.cities && this.props.cities.map((item) => {
                                        if (item.idCountry === this.props.thisNewEvent.countryId) {
                                            return (
                                                <Dropdown.Item className={`${drop.dropdownItem}`} key={item.id}
                                                               onClick={() => this.handleDropdownSelect(item.city, 'city', item.id)}>
                                                    {item.city}
                                                </Dropdown.Item>
                                            );
                                        }
                                        return null;
                                    }) : ""}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className={`${drop.dropDownDesign}`}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                                 className={`${drop.dropdownToggle}`}>
                                    {this.props.thisNewEvent.sport ? this.props.thisNewEvent.sport : 'Вид спорта'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                                    {Array.isArray(this.props.sports) ? this.props.sports && this.props.sports.map((item) => (
                                        <Dropdown.Item className={`${drop.dropdownItem}`} key={item.id}
                                                       onClick={() => this.handleDropdownSelect(item.name, 'sport', item.id)}>
                                            {item.name}
                                        </Dropdown.Item>
                                    )) : ""}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className={`${drop.dropDownDesign}`}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                                 className={`${drop.dropdownToggle}`}>
                                    {this.props.thisNewEvent.gender ? this.props.thisNewEvent.gender : 'Пол'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                                    {Array.isArray(this.props.gender) ? this.props.gender && this.props.gender.map((item) => (
                                        <Dropdown.Item className={`${drop.dropdownItem}`} key={item.id}
                                                       onClick={() => this.handleDropdownSelect(item.name, 'gender', item.id)}>
                                            {item.name}
                                        </Dropdown.Item>
                                    )) : ""}
                                </Dropdown.Menu>
                            </Dropdown>
                            <input ref={this.state.ref2} className={eventsCss.modalContent} type="date"
                                   placeholder="Дата начала"
                                   value={this.props.thisNewEvent.dateStart ? this.props.thisNewEvent.dateStart : ""}
                                   onChange={this.handleStartDateChange}/><br/><label>Дата начала мероприятия</label>
                            <input ref={this.state.ref3} className={eventsCss.modalContent} type="date"
                                   placeholder="Дата конца"
                                   value={this.props.thisNewEvent.dateFinish ? this.props.thisNewEvent.dateFinish : ""}
                                   onChange={this.handleEndDateChange}/><br/><label>Дата конца мероприятия</label>
                            <input ref={this.state.ref4}
                                   value={this.props.thisNewEvent.name ? this.props.thisNewEvent.name : ""}
                                   className={eventsCss.modalContent} type="text"
                                   placeholder="Наименование мероприятия"
                                   onChange={this.handleNameChange}/><br/>
                            <button className={`${eventsCss.saveBtn} ${button.buttonsInfo}`}
                                    onClick={this.handleSave}>Сохранить
                            </button>
                            <button className={`${eventsCss.closeBtn} ${button.buttonsInfo}`}
                                    onClick={this.toggleModal}>Отмена
                            </button>
                        </div>
                    )}
                </div>
                {this.state.showModal && <div className={eventsCss.overlay}></div>}
            </div>
        )
        }
    }
}

export default addNewEvent;