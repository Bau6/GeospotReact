import React from 'react';
// import {format} from 'date-fns';

class ChooseDataEvent extends React.Component {

    handleStartDateChange = (event) => {
        this.props.thisStartData(new Date(event.target.value).toISOString());
    };

    handleEndDateChange = (event) => {
        this.props.thisEndData(new Date(event.target.value).toISOString());
    };

    render() {
        return (
            <div>
                <label>Начальная дата:</label>
                <input type="date" value={this.props.startData} onChange={this.handleStartDateChange}/>
                <br/>
                <label>Конечная дата:</label>
                <input type="date" value={this.props.endData} onChange={this.handleEndDateChange}/>
            </div>
        );
    }
}

export default ChooseDataEvent;