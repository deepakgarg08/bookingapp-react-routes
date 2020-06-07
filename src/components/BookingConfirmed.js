import React from "react";
import { BOOKING_CONFIRMED } from '../redux/actionTypes'
import { connect } from 'react-redux'
class BookingConfirmed extends React.Component {


    render() {
        let request_id = parseInt(Math.random() * 1000) + 1
        // let CurrentPageState = this.props.init.currentPageState

        return (
            <div id="veryouter">
            <div id="outerdiv">
                <div id="friendlyprops">
                    <div className="container">
                        <h1 className="center">Confirmation</h1><br />
                        <h3 id="h3_">Thank you for your request!</h3><br />
                        <h4 id="h3_"> Your confirmation id is: {request_id} </h4><br />
                    </div>
                </div>
        
        
            </div>
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        init: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changecurrentPageState: (currentPageState) => { dispatch({ type: BOOKING_CONFIRMED, payload: { currentPageState: currentPageState } }) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BookingConfirmed)