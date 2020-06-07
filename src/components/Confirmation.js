import React from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes'
import FriendlyConfirmation from "./FriendlyConfirmation";


class Confirmation extends React.Component {

    render() {
        return (
            <div id="veryouter">
                <div id="outerdiv">
                    <div id="friendlyprops">
                        <FriendlyConfirmation flag={this.props.init} id="friendly1" />
                    </div>
                    <div>
                        <div>
                            <FriendlyConfirmation flag={this.props.init} id="friendly2" />
                        </div>
                        <div>
                            <FriendlyConfirmation flag={this.props.init} id="friendly3" />
                        </div>
                    </div>
                    <div id="friendlyprops">
                        <FriendlyConfirmation flag={this.props.init} id="friendly4" />
                    </div>

                </div>
            </div>
        )
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
        changecurrentPageState: (currentPageState) => { dispatch({ type: actions.PAGE_STATE, payload: { currentPageState: currentPageState } }) },
        bookingConfirmed: (bookingConfirmed) => { dispatch({ type: actions.BOOKING_CONFIRMED, payload: { bookingConfirmed: bookingConfirmed } }) },


    }

}
export default connect(mapStateToProps, mapDispatchToPropsLocation)(Confirmation)
