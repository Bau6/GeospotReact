import eventsCss from "./events.module.css";
import EventsFormContainer from "./eventsFormContainer";
import React from "react";
import DropDownMenuEventContainer from "./DropDownMenuEventContainer";
import ChooseDataEventContainer from "./ChooseDataEventContainer";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            city: '',
            startDate: '',
            endDate: ''
        };
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    handleCityChange = (event) => {
        this.setState({ city: event.target.value });
    };

    handleStartDateChange = (event) => {
        this.setState({ startDate: event.target.value });
    };

    handleEndDateChange = (event) => {
        this.setState({ endDate: event.target.value });
    };

    handleSave = () => {
        // Добавить логику для сохранения данных
        console.log('Город:', this.state.city);
        console.log('Дата начала:', this.state.startDate);
        console.log('Дата конца:', this.state.endDate);

        // Закрыть модальное окно после сохранения
        this.toggleModal();
    };
    componentDidMount() {
        this.props.UserLocation(window.location.href);
    }
    render() {
        return (
            <div>
                <div className={eventsCss.containerEvent}>
                    <div className={eventsCss.fixedContent}>
                        <DropDownMenuEventContainer/>
                        <ChooseDataEventContainer/>
                    </div>
                    <div className={eventsCss.fixedEvents}>
                        <div>Мероприятия</div>
                        <EventsFormContainer/>
                    </div>
                </div>
                <div>
                    <button onClick={this.toggleModal}>Добавить запись</button>
                    {this.state.showModal && (
                        <div className={eventsCss.modal}
                             style={{display: this.state.showModal ? 'block' : 'none'}}>
                            <input className={eventsCss.modalContent} type="text" placeholder="Город"
                                   value={this.state.city} onChange={this.handleCityChange}/>
                            <input type="date" placeholder="Дата начала" value={this.state.startDate}
                                   onChange={this.handleStartDateChange}/>
                            <input type="date" placeholder="Дата конца" value={this.state.endDate}
                                   onChange={this.handleEndDateChange}/>
                            <button onClick={this.handleSave}>Сохранить</button>
                            <button className={eventsCss.closeBtn} onClick={this.toggleModal}>Отмена</button>
                        </div>
                    )}
                </div>
                {this.state.showModal && <div className={eventsCss.overlay}></div>}
            </div>
        )
    }
}

export default Events;