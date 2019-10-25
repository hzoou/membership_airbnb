import React, { useState, useEffect } from 'react';
import { DayPickerRangeController } from "react-dates";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../../style/dateFilter.css';

export default ({ state, setState }) => {
    const [ startDate, setStartDate ] = useState(state.startDate);
    const [ endDate, setEndDate ] = useState(state.endDate);
    const [ focusedInput, setFocusedInput ] = useState('startDate');

    const onDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
        if (startDate && endDate) setState({ startDate, endDate });
        else if (startDate) setState({ startDate, endDate: null });
        else if (endDate) setState({ startDate: null, endDate });
    };

    const onFocusChange = focusedInput => {
        setFocusedInput(!focusedInput ? 'startDate' : focusedInput);
    };

    const initState = () => {
        setStartDate(state.startDate);
        setEndDate(state.endDate);
    };

    useEffect(initState, [ state ]);

    return (
        <DayPickerRangeController
            startDate={startDate}
            endDate={endDate}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
            onDatesChange={onDatesChange}
            hideKeyboardShortcutsPanel={true}
            isOutsideRange={day => day.isSameOrBefore(new Date().getTime() - (24 * 60 * 60 * 1000))}
            numberOfMonths={2}
        />
    );
};