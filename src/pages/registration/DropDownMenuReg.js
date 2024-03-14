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
                <Dropdown.Item eventKey="Action" onClick={() => handleDropdownSelect("Начинающий", props.index)}>
                    Начинающий
                </Dropdown.Item>
                <Dropdown.Item eventKey="Another action" onClick={() => handleDropdownSelect("Опытный", props.index)}>
                    Опытный
                </Dropdown.Item>
                <Dropdown.Item eventKey="Something else" onClick={() => handleDropdownSelect("Профессионал", props.index)}>
                    Профессионал
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenuReg;