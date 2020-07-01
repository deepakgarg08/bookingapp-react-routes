import React from "react";
import Location from './Location'
import Staff from './Staff'
import Services from './Services'
import { connect } from 'react-redux'
import { PAGE_STATE } from '../redux/actionTypes'
import ServiceExtras from "./ServiceExtras";
import DateTime from "./DateTime";
import Information from './Information'
import Confirmation from './Confirmation'
import BookingConfirmed from './BookingConfirmed'

class RightContainerComponent extends React.Component {


    render() {
        let CurrentPageState = this.props.init.currentPageState
        // console.log('CurrentPageState', CurrentPageState)

        switch (CurrentPageState) {
            case 'location': return (<div><Location /></div>);
            case 'staff': return (<div><Staff /></div>);
            case 'services': return (<div><Services /></div>);
            case 'extraService': return (<div><ServiceExtras /></div>);
            case 'dateAndTime': return (<div><DateTime /></div>);
            case 'information': return (<div id= "resize_div"><Information /></div>);
            case 'confirmation': return (<div ><Confirmation /></div>); //id= "resize_div"
            case 'bookingConfirmed': return (<div ><BookingConfirmed /></div>); 
            default: return (<div><Location /></div>);
        }
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        init: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changecurrentPageState: (currentPageState) => { dispatch({ type: PAGE_STATE, payload: { currentPageState: currentPageState } }) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(RightContainerComponent)





