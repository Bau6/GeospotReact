import React from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from "axios";
const TABLE_SPORTS = "sporttype";
class DropDownMenuEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ''
        };
    }
    // componentDidMount() {
    //     axios.get('http://localhost:3003/output-table', {
    //         params: {
    //             nameTable: TABLE_SPORTS,
    //             params: {}
    //         }
    //     })
    //         .then(response => {
    //             this.props.loadSports(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }
    handleDropdownSelect = (eventKey) => {
        this.setState({ selectedValue: eventKey });
        // console.log(this.props.sports)
    };

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {'Вид спорта'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {Array.isArray(this.props.sports) ? this.props.sports && this.props.sports.map((item) => (
                        <Dropdown.Item key={item.id} onClick={() => this.handleDropdownSelect(item.name)}>
                            {item.id + " " + item.name}
                        </Dropdown.Item>
                    )) : ""}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropDownMenuEvent;