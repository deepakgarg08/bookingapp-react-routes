import React, { Component } from "react";
import { BOOKING_CONFIRMED, REQUEST_ID } from '../redux/actionTypes'
import { connect } from 'react-redux'
import axios from 'axios'

class BookingConfirmed extends React.Component {
    render() {
        let request_id = parseInt(Math.random() * 1000) + 1
        console.log('request_id', request_id)
        let CurrentPageState = this.props.init
        CurrentPageState.request_id = request_id

        // let newCurrentPageState = this.props.init.currentPageState //confirmation
        // console.log('newCurrentPageState', newCurrentPageState)

        // if (newCurrentPageState === "bookingConfirmed") {
        //     this.props.requestId(request_id)

        
        // }





        axios
            .post("http://localhost:4000/new/", {
                // operator_name: this.operator_name,
                customerData: CurrentPageState
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

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
        changecurrentPageState: (currentPageState) => {
            dispatch({ type: BOOKING_CONFIRMED, payload: { currentPageState: currentPageState } })
        },
        requestId: (requestId) => {
            dispatch({ type: REQUEST_ID, payload: { requestId: requestId } })

        },

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BookingConfirmed)