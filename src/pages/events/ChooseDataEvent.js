import React from 'react';
import {Dropdown} from "react-bootstrap";
import {DATE_FORMAT_DATE, dateStrISO} from "../../assets/date/formatDate";
import {addDays} from "date-fns";
import drop from "../../assets/css/dropDown.module.css";

// import {format} from 'date-fns';

class ChooseDataEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        };
    }

    // handleStartDateChange = (event) => {
    //     this.props.thisStartData(new Date(event.target.value).toISOString());
    // };
    //
    // handleEndDateChange = (event) => {
    //     this.props.thisEndData(new Date(event.target.value).toISOString());
    // };

    handleDropdownSelect = (id) => {
        this.props.loadData(id);
        if (id === 1) {
            this.setState({selectedValue: "Предстоящие"});
        }else if (id === 2) {
            this.setState({selectedValue: "Прошедшие"});
        }else if (id === 3) {
            this.setState({selectedValue: "Текущие"});
        }else {
            this.setState({selectedValue: "Все мероприятия"});
        }
    };

    render() {
        return (
            <div>
                <Dropdown className={`${drop.dropDownDesign}`}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className={`${drop.dropdownToggle}`}>
                        {this.state.selectedValue || 'Дата соревнования'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                        <Dropdown.Item className={`${drop.dropdownItem}`} onClick={() => this.handleDropdownSelect( 1)}>
                            Предстояшие
                        </Dropdown.Item>
                        <Dropdown.Item className={`${drop.dropdownItem}`} onClick={() => this.handleDropdownSelect(2)}>
                            Прошедшие
                        </Dropdown.Item>
                        <Dropdown.Item className={`${drop.dropdownItem}`} onClick={() => this.handleDropdownSelect(3)}>
                            Текущие
                        </Dropdown.Item>
                        <Dropdown.Item className={`${drop.dropdownItem}`} onClick={() => this.handleDropdownSelect(0)}>
                            Все мероприятия
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/*<label>Начальная дата:</label>*/}
                {/*<input type="date" value={this.props.nowData} onChange={this.handleStartDateChange}/>*/}
                {/*<br/>*/}
                {/*<label>Конечная дата:</label>*/}
                {/*<input type="date" value={this.props.weekData} onChange={this.handleEndDateChange}/>*/}
            </div>
        );
    }
}

export default ChooseDataEvent;