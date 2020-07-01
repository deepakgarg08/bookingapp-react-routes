import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes'
import axios from 'axios'
let host = process.env.REACT_APP_HOST
let server_port = process.env.REACT_APP_PORT || 4000

// axios.defaults.baseURL = host + server_port

function FriendlyConfirmation(props) {
    console.log('props FriendlyConfirmation', props)
    const [discount, setDiscount] = useState('')

    let handleChange = (e) => {
        e.preventDefault()
        let totalamount = sessionStorage.getItem('totalprice')
        console.log('totalamount', totalamount)
        let pageState = props.init

        let request_id = parseInt(Math.random() * 1000) + 1
        pageState.requestId = request_id
        pageState.totalamount = totalamount

        if (pageState.currentPageState === "confirmation") {
            axios
            // .post("/new/", {
                .post("/new/", {
                    customerData: pageState
                })
                .then(function (response) {
                    props.changecurrentPageState('bookingConfirmed')
                    props.bookingConfirmed('yes')
                    props.requestId(request_id)

                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }

    switch (props.id) {
        case 'friendly1': {
            return (
                <div id={props.id}>

                    <div style={{ float: "right" }}>
                        <span style={{ color: "#6C70DC", fontFamily: 'Poppins' }}>Location: <span> </span></span>
                        <span>  {props.flag.location} </span>
                    </div>
                    <div style={{ float: "left" }}>
                        <span style={{ color: "#6C70DC", fontFamily: 'Poppins' }}>Date & TIme: <span> </span></span>
                        <span>  {props.flag.dateAndTime.date} <span> -</span> {props.flag.dateAndTime.time} </span>
                    </div>

                </div>
            );

        }

        case 'friendly2': {
            const servicePrice = Number(props.flag.services.price ? props.flag.services.price : 0)
            const extraservicePrice = Number(props.flag.extraService.price ? props.flag.extraService.price : 0)
            let discountPrice = 0;
            let totalPrice = servicePrice + extraservicePrice + discountPrice
            // let discountdata = sessionStorage.getItem("mydiscountkey")
            console.log('discountdata in friendly2', discount)
            if(discount === 'discount5'){

                discountPrice = 0.05 * totalPrice //5% discount
                totalPrice = totalPrice - discountPrice

            }else if(discount === 'discount10'){
                discountPrice = 0.10 * totalPrice //5% discount
                totalPrice = totalPrice - discountPrice
            }

            sessionStorage.setItem('totalprice', totalPrice)

            return (
                <div id={props.id} >
                    <div>
                        <span style={{ float: "left", color: "#E09B22" }}>{props.flag.services.name} </span>
                        <span style={{ float: "right", color: "#E09B22" }}>{servicePrice} Rs </span><br />

                        {props.flag.extraService.name ? <div>
                            <span style={{ float: "left", color: "#E09B22" }}> {props.flag.extraService.name} </span>
                            <span style={{ float: "right", color: "#E09B22" }}> {extraservicePrice} Rs </span>
                        </div>
                            : null
                        }
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <input type="text" name="discount" id="discountinput" placeholder="Enter Coupon Code" value={discount} onChange={e => setDiscount(e.target.value)} />

                        {/* <br/>
                        <span style={{ float: "left", color: "#5ac36e" }}> Discount</span>
                        <span style={{ float: "right", color: "#5ac36e" }}>{discountPrice} Rs </span> */}
                    </div>
                    <br />
                    <div>
                        <span style={{ float: "left", color: "green" }}>Total Price </span>
                        <span style={{ float: "right", color: "green" }}> {totalPrice} Rs </span><br />
                    </div>
                </div>
            )
        }
        case 'friendly3': {
            return (
                <div id={props.id} >
                    <div style={{ float: "left", textAlign: "left" }}>
                        {/*  eslint-disable-next-line */}
                        <a href="#">Credit Card</a><br />
                        {/*  eslint-disable-next-line */}
                        <a href="#"> Paytm</a><br />
                        {/*  eslint-disable-next-line */}
                        <a href="#"> Google Pay</a><br />
                        {/*  eslint-disable-next-line */}
                        <a href="#"> Phone Pay</a><br />
                        {/*  eslint-disable-next-line */}
                        <a href="#"> NetBanking</a><br />
                    </div>
                </div>
            )
        }
        case 'friendly4': {
            return (
                <div id={props.id} >
                    <div>
                        <button id="confirmationbutton" onClick={handleChange}>CONFIRM BOOKING</button>
                    </div>
                </div>
            )
        }
        default: break
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
        requestId: (requestId) => {
            dispatch({ type: actions.REQUEST_ID, payload: { requestId: requestId } })

        },


    }

}
export default connect(mapStateToProps, mapDispatchToPropsLocation)(FriendlyConfirmation)