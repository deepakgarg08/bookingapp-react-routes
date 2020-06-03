import React from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes'

class Confirmation extends React.Component {

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
            return (
                <div id={props.id} >
                    <div>
                        <span style={{ float: "left", color: "#E09B22" }}>{props.flag.services.name} </span>
                        <span style={{ float: "right", color: "#E09B22" }}>{props.flag.services.price} Rs </span><br />

                        {props.flag.extraService.name ? <div>
                            <span style={{ float: "left", color: "#E09B22" }}> {props.flag.extraService.name} </span>
                            <span style={{ float: "right", color: "#E09B22" }}> {props.flag.extraService.price} Rs </span>
                        </div>
                            : null
                        }


                        <br/>
                        <span style={{ float: "left", color: "#5ac36e" }}> Discount</span>
                        <span style={{ float: "right", color: "#5ac36e" }}> 50 Rs </span>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div>
                        <span style={{ float: "left", color: "green" }}>Total Price </span>
                        <span style={{ float: "right", color: "green" }}> 150 Rs </span><br />
                    </div>
                </div>
            )
        }
        case 'friendly3': {
            return (<div id={props.id} ></div>)
        }
        case 'friendly4': {
            return (<div id={props.id} ></div>)
        }
        default: break
    }


    //avatar complex component

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
        // newLocationValue: (location) => { dispatch({ type: actions.LOCATION, payload: { location: location } }) },
        // newstaffValue: (staff) => { dispatch({ type: actions.STAFF, payload: { staff: staff } }) },
        // newservicesValue: (services) => { dispatch({ type: actions.SERVICES, payload: { services: services } }) },
        // extraService: (extraService) => { dispatch({ type: actions.EXTRA_SERVICES, payload: { extraService: extraService } }) },


    }

}
export default connect(mapStateToProps, mapDispatchToPropsLocation)(Confirmation)
