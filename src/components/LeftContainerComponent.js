import React from 'react'
import { connect } from 'react-redux'

import { Link, NavLink, withRouter } from 'react-router-dom'



const currentTab = (currentState, state) => {
    if (currentState === state) {
        return "circleonclick";
    } else if (currentState > state) {
        return "circleafterclick";
    } else {
        return "circlebeforeclick";

    }
};
const currentHeading = (currentState, state) => {
    if (currentState === state) {
        return "selected";
    } else {
        return "non-selected";
    }
};

const returnState = (stateName) => {
    switch (stateName) {
        case "location":
            return 1;
        case "staff":
            return 2;
        case "services":
            return 3;
        case "extraService":
            return 4;
        case "dateAndTime":
            return 5;
        case "information":
            return 6;
        case "confirmation":
            return 7;
        case "bookingConfirmed":
            return 8;

    }
}



function LeftContainerComponent(props) {
    // TODO: put current state from hook in the 
    let currentpagestate = props.init.currentPageState
    const currentState = returnState(currentpagestate);
    return (
        <div id="leftsidecontainer" >
                {/* <Link className="brand-logo" to="/"> Booking App</Link> */}

            <div id="leftcontainerdata" className="leftcontdata">

                <div className="nameproperty">
                    <span className={currentTab(currentState, 1)}>1</span>
                    <span className={currentHeading(currentState, 1)}> <NavLink exact to="/">Location </NavLink> </span>
                </div>
                <div className="nameproperty">
                    <span className={currentTab(currentState, 2)}>2</span>
                    <span className={currentHeading(currentState, 2)}><NavLink to="/staff"> staff</NavLink> </span>
                </div>
                <div className="nameproperty">
                    <span className={currentTab(currentState, 3)}>3</span>
                    <span className={currentHeading(currentState, 3)}> <NavLink to="/services">  Services </NavLink> </span>
                </div>
                <div className="nameproperty">
                    <span className={currentTab(currentState, 4)}>4</span>
                    <span className={currentHeading(currentState, 4)} > <NavLink to="/serviceextras">  Service Extras </NavLink> </span>
                </div>

                <div className="nameproperty">
                    <span className={currentTab(currentState, 5)}>5</span>
                    <span className={currentHeading(currentState, 5)}> <NavLink to="/datetime">  Date and Time </NavLink> </span>
                </div>

                <div className="nameproperty">
                    <span className={currentTab(currentState, 6)}>6</span>
                    <span className={currentHeading(currentState, 6)}>  <NavLink to="/information"> Information </NavLink> </span>
                </div>

                <div className="nameproperty">
                    <span className={currentTab(currentState, 7)}>7</span>
                    <span className={currentHeading(currentState, 7)}>  <NavLink to="/confirmation"> Confirmation </NavLink> </span>
                </div>
                <div className="nameproperty">
                    {/* <span className={currentTab(currentState, 8)}></span> */}
                    <span className={currentHeading(currentState, 8)}>  </span>
                </div>
            </div>
        </div>
    );
}

//redux mappings
const mapStateToProps = (state, ownProps) => {
    return {
        init: state
    }
}




export default connect(mapStateToProps)(LeftContainerComponent)

