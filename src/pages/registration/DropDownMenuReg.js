import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function DropDownMenuReg(props) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownSelect = (eventKey, index) => {
        setSelectedValue(eventKey);
        props.onDropdownSelect(eventKey, index);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedValue || 'Выберите уровень'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.qualifications.map((qualification, index) => (
                    <Dropdown.Item key={index} eventKey={qualification.name} onClick={() => handleDropdownSelect(qualification.name, props.index)}>
                        {qualification.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenuReg;