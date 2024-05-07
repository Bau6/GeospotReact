import React from 'react';
import { Dropdown } from 'react-bootstrap';
import drop from "../../assets/css/dropDown.module.css";
class DropDownMenuEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        };
    }
    handleDropdownSelect = (eventKey) => {
        this.setState({ selectedValue: eventKey });
        if (eventKey === "Все мероприятия"){
            this.props.loadSports("");
        } else {this.props.loadSports(eventKey);}

    };
    render() {
        return (
            <Dropdown className={`${drop.dropDownDesign}`}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={`${drop.dropdownToggle}`}>
                    {this.state.selectedValue || 'Вид спорта'}
                </Dropdown.Toggle>
                <Dropdown.Menu className={`${drop.dropdownMenu}`}>
                    {Array.isArray(this.props.sports) ? this.props.sports && this.props.sports.map((item) => (
                        <Dropdown.Item className={`${drop.dropdownItem}`} key={item.id} onClick={() => this.handleDropdownSelect(item.name)}>
                            {item.name}
                        </Dropdown.Item>
                    )) : ""}
                    <Dropdown.Item className={`${drop.dropdownItem}`} key={0} onClick={() => this.handleDropdownSelect("Все мероприятия")}>
                        Все мероприятия
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropDownMenuEvent;