import React from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes'
import FriendlyConfirmation from "./FriendlyConfirmation";



class Confirmation extends React.Component {

    render() {
        return (
            // <div id="veryouter">
            //     <div>
            //         <br />
            //         <strong className="forconfirmlabelmargin">Please Check and Confirm your details</strong>
            //         <br />
            //         <br />
            //         <div className="friendlyprops">
            //             <FriendlyConfirmation flag={this.props.init} id="friendly1" />
            //         </div>
            //         <div>
            //             <div>
            //                 <FriendlyConfirmation flag={this.props.init} id="friendly2" />
            //             </div>
            //             <div>
            //                 <FriendlyConfirmation flag={this.props.init} id="friendly3" />
            //             </div>
            //         </div>
            //         <div className="friendlypropss">
            //             <FriendlyConfirmation flag={this.props.init} id="friendly4" />
            //         </div>

            //     </div>
            // </div>


            // <div id="rightcontainer" class="main-right-prop">

            <div className="container main-right-prop ">
                <div className="row row1-prop commonrow-prop">
                    <FriendlyConfirmation flag={this.props.init} id="friendly1" />
                </div>

                <div className="row justify-content-between mt-4 row2-prop commonrow-prop">
                    <div className="col-md-6  col2-prop">
                        <FriendlyConfirmation flag={this.props.init} id="friendly2" />
                    </div>
                    <div className="col-md-5  col3-prop">
                        <FriendlyConfirmation flag={this.props.init} id="friendly3" />
                    </div>
                </div>

                <div className="row mt-4 row3-prop commonrow-prop">
                    <div className="col-sm col4-prop">
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
