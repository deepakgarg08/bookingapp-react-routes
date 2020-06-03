import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker';

function DateTime(props) {
     
    const [date, onChangeDate] = useState(new Date().toGMTString())
    const [time, onChangeTime] = useState('10:00');

    let newCurrentPageState = props.init.currentPageState //dateAndTime

    let handleSubmit = (e) => {
        e.preventDefault()

        if (newCurrentPageState === "dateAndTime") {
            props.changecurrentPageState('information')
            props.selectDateAndTime({date, time})
        
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <span> Please select desired date (MM/DD/YYYY) :</span>
                <DatePicker className="datepickr"
                    onChange={onChangeDate}
                    value={date}
                />
                <br />
                <br />
                <TimePicker className="timepickr"
                    onChange={onChangeTime}
                    value={time}
                />
                <br />
                <br />

                <button> next</button>
            </form>

        </div>


    )
}


//redux mappings
const mapStateToProps = (state, ownProps) => {

    return {
        init: state
    }
}

const mapDispatchToPropsLocation = (dispatch, ownProps) => {

    return {
        changecurrentPageState: (currentPageState) => { dispatch({ type: actions.PAGE_STATE, payload: { currentPageState: currentPageState } }) },
        selectDateAndTime: (dateAndTime) => { dispatch({ type: actions.DATE_TIME, payload: { dateAndTime: dateAndTime } }) },
    }
}

export default connect(mapStateToProps, mapDispatchToPropsLocation)(DateTime)


