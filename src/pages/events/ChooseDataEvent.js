import React, {useState} from 'react';
import {format, addDays} from 'date-fns';

function ChooseDataEvent(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 7)); // добавляем 7 дней к текущей дате

    const handleStartDateChange = (event) => {
        setStartDate(new Date(event.target.value));
    };

    const handleEndDateChange = (event) => {
        setEndDate(new Date(event.target.value));
    };

    return (
        <div>
            <label>Начальная дата:</label>
            <input type="date" value={format(startDate, 'yyyy-MM-dd')} onChange={handleStartDateChange}/>
            <br/>
            <label>Конечная дата:</label>
            <input type="date" value={format(endDate, 'yyyy-MM-dd')} onChange={handleEndDateChange}
                   min={format(startDate, 'yyyy-MM-dd')}/>
        </div>
    );
}

export default ChooseDataEvent;