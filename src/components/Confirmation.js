import React from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes'

class Confirmation extends React.Component {

    render() {




        return (
            <div id="veryouter">
                <div id="outerdiv">
                    <div id="innerdivconfirmaiton">
                        <div id="friendlyprops">
                            <Friendly flag={this.props.init} id="friendly1" />
                        </div>
                        <div>
                            <Friendly flag={this.props.init} id="friendly2" />
                        </div>
                        <div>
                            <Friendly flag={this.props.init} id="friendly3" />
                        </div>
                        <div id="friendlyprops">
                            <Friendly flag={this.props.init} id="friendly4" />
                        </div>
                    </div>
                </div>

                {/* <Friendly flag = 'b'/>
                <Friendly flag = 'c'/> */}

            </div>
        )
    }
}




function Friendly(props) {

    console.log('props.............', props.flag.dateAndTime.date)


    let handleEvent = (props) => {
    }

    return (

        <div>
            <span>
                <button id={props.id} onClick={handleEvent}>
                    <div>
                        <div style={{ float: "right"}}>
                            <span style={{ color: "#6C70DC", fontFamily : 'Poppins' }}>Location: <span> </span></span>
                            <span>  {props.flag.location} </span>
                        </div>
                        <div style={{ float: "left"}}>
                            <span style={{ color: "#6C70DC" , fontFamily : 'Poppins'}}>Date & TIme: <span> </span></span>
                            <span>  {props.flag.dateAndTime.date} </span>
                        </div>
                       
                    </div>
                </button>
            </span>
        </div>
    );



    //avatar complex component
    function Avatar(props) {
        return (
            < img src={props.img} alt={props.name} height="400px" id="avatar" />
        );
    }

    //username component

    function UserName(props) {
        return (
            <h1 id="username">{props.name}</h1>
        );
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
        // newLocationValue: (location) => { dispatch({ type: actions.LOCATION, payload: { location: location } }) },
        // newstaffValue: (staff) => { dispatch({ type: actions.STAFF, payload: { staff: staff } }) },
        // newservicesValue: (services) => { dispatch({ type: actions.SERVICES, payload: { services: services } }) },
        // extraService: (extraService) => { dispatch({ type: actions.EXTRA_SERVICES, payload: { extraService: extraService } }) },


    }

}
export default connect(mapStateToProps, mapDispatchToPropsLocation)(Confirmation)
