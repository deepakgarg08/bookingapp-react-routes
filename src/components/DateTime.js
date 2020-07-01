import React, { useState } from "react";
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker';

function DateTime(props) {

    let [date, onChangeDate] = useState(new Date())
    let [time, onChangeTime] = useState('10:00');

    let newCurrentPageState = props.init.currentPageState //dateAndTime

    let handleSubmit = (e) => {
        e.preventDefault()

        if (newCurrentPageState === "dateAndTime") {
            props.changecurrentPageState('information')
            date = date.toLocaleString()
            props.selectDateAndTime({ date, time })
        }
    }

    return (
        <div id="rightcontainer" className="dateandtimediv">
            <form onSubmit={handleSubmit}>
                <span> Please select desired Date (MM/DD/YYYY) :</span>
                <br/>  <br />
                <DatePicker className="datepickr date-time"
                    onChange={onChangeDate}
                    value={date}
                />
                <br />
                <br />
                <span> Please select desired Time:</span>
                <br />
                <br />

                <TimePicker className="timepickr date-time"
                    onChange={onChangeTime}
                    value={time}
                />
                <br />
                <br />

                <div className='submit' id="dateandtimediv">
                    <button id="confirmationbutton">Next</button>
                </div>
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


