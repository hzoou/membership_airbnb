import React, { useState } from 'react';
import { DayPickerRangeController } from "react-dates";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../../style/dateFilter.css';

export default () => {
    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate ] = useState();
    const [ focusedInput, setFocusedInput ] = useState('startDate');

    const onDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const onFocusChange = focusedInput => {
        if (!focusedInput) setFocusedInput('startDate');
        else setFocusedInput(focusedInput);
    };

    return (
        <DayPickerRangeController
            startDate={startDate}
            endDate={endDate}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
            onDatesChange={onDatesChange}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={2}
        />
    );
};