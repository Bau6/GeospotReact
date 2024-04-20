import React from 'react';
import { Dropdown } from 'react-bootstrap';
class DropDownMenuEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        };
    }
    handleDropdownSelect = (eventKey) => {
        this.setState({ selectedValue: eventKey });
    };
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.selectedValue || 'Вид спорта'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {Array.isArray(this.props.sports) ? this.props.sports && this.props.sports.map((item) => (
                        <Dropdown.Item key={item.id} onClick={() => this.handleDropdownSelect(item.name)}>
                            {item.name}
                        </Dropdown.Item>
                    )) : ""}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropDownMenuEvent;