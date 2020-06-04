import React from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes'


class Confirmation extends React.Component {


     changeStats = () => {

        
    }

    render() {
        return (
            <div id="veryouter">
                <div id="outerdiv">
                    <div id="friendlyprops">
                        <Friendly flag={this.props.init} id="friendly1" />
                    </div>
                    <div>
                        <div>
                            <Friendly flag={this.props.init} id="friendly2" />
                        </div>
                        <div>
                            <Friendly flag={this.props.init} id="friendly3" />
                        </div>
                    </div>
                    <div id="friendlyprops">
                        <Friendly flag={this.props.init} id="friendly4" />
                    </div>

                </div>
            </div>
        )
    }
}

function Friendly(props) {
    console.log('props inside confirmation', props)
    // let newCurrentPageState = props.init.currentPageState //confirmation
    // console.log('newCurrentPageState', newCurrentPageState)

    let handleChange = (e)=>{
        console.log('inside handleChange')

        e.preventDefault()

        // if (newCurrentPageState === "confirmation") {
        //     props.changecurrentPageState('bookingConfirmed')
        //     props.bookingConfirmed('yes')
        
        // }

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
            const discountPrice = 0;
            const totalPrice = servicePrice + extraservicePrice + discountPrice


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

                        {/* <input type= "text" name= "discount" value = "discount" /> */}

                        {/* <br/>
                        <span style={{ float: "left", color: "#5ac36e" }}> Discount</span>
                        <span style={{ float: "right", color: "#5ac36e" }}>{discountPrice} Rs </span> */}
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                    {/* <button style={{ float: "left", color: "voilet" }} onClick= {handleChange}>CONFIRM BOOKING</button> */}
                    </div>
                </div>
            )
        }
        default: break
    }
}
{/* <i class="fa fa-credit-card" aria-hidden="true"></i> */ }
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
connect(mapStateToProps, mapDispatchToPropsLocation)(Friendly)
export default connect(mapStateToProps, mapDispatchToPropsLocation)(Confirmation)
