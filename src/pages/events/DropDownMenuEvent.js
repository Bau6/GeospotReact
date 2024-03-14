import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function DropDownMenuEvent(props) {
    const [selectedValue, setSelectedValue] = useState('');
    const handleDropdownSelect = (eventKey) => {
        setSelectedValue(eventKey);
    };

    return (

        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedValue || 'Вид спорта'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.sportNameFromBD && props.sportNameFromBD.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item.name} onClick={() => handleDropdownSelect(item.name)}>
                        {item.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenuEvent;