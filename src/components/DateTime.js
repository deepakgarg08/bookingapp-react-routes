import React from "react";
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'
import DateTimePicker from "./DateTimeData";

class DateTime extends React.Component {

     dateandtimestates = () => [
        console.log("this.props",this.props)
    ]
    
    render() {
        console.log("this.props in DateTime componenet", this.props)
        return (
            <div>
                <DateTimePicker dateandtimestates= {this.dateandtimestates}/>
            </div>
        )
    }

    handleEvent = () => {
        console.log('handleEvent')


    //     let newCurrentPageState = this.props.init.currentPageState //location
    //     console.log('newCurrentPageState inside date and time', newCurrentPageState)


    //     if (newCurrentPageState === 'location') {
    //         this.props.changecurrentPageState('information')
    //         // this.props.selectDateAndTime(dateAndTime)

    //     }
    }
}


//redux mappings
const mapStateToProps = (state, ownProps) => {
    return {
        init: state
    }
}

const mapDispatchToPropsLocation = (dispatch, ownProps) => {

    return {

        // changecurrentPageState: (currentPageState) => { dispatch({ type: actions.PAGE_STATE, payload: { currentPageState: currentPageState } }) },
        // newLocationValue: (location) => { dispatch({ type: actions.LOCATION, payload: { location: location } }) },
        // newstaffValue: (staff) => { dispatch({ type: actions.STAFF, payload: { staff: staff } }) },
        // newservicesValue: (services) => { dispatch({ type: actions.SERVICES, payload: { services: services } }) },
        // extraService: (extraService) => { dispatch({ type: actions.EXTRA_SERVICES , payload: { extraService: extraService } }) },
    selectDateAndTime: (dateAndTime) => { dispatch({ type: actions.DATE_TIME , payload: { dateAndTime: dateAndTime } }) },


    }

}


export default connect(mapStateToProps, mapDispatchToPropsLocation)(DateTime)
