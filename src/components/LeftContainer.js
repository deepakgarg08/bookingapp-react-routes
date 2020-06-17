import React from "react";
import { connect } from 'react-redux'


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
            <div id="leftcontainerdata" className="leftcontdata">
                <div className="nameproperty">
                    <span className={currentTab(currentState, 1)}>1</span>
                    <span className={currentHeading(currentState, 1)}> Location </span>
                </div>
                <div className="nameproperty">
                    <span className={currentTab(currentState, 2)}>2</span>
                    <span className={currentHeading(currentState, 2)}> staff </span>
                </div>
                <div className="nameproperty">
                    <span className={currentTab(currentState, 3)}>3</span>
                    <span className={currentHeading(currentState, 3)}> Services </span>
                </div>
                <div className="nameproperty">
                    <span className={currentTab(currentState, 4)}>4</span>
                    <span className={currentHeading(currentState, 4)} > Service Extras </span>
                </div>

                <div className="nameproperty">
                    <span className={currentTab(currentState, 5)}>5</span>
                    <span className={currentHeading(currentState, 5)}> Date and Time </span>
                </div>

                <div className="nameproperty">
                    <span className={currentTab(currentState, 6)}>6</span>
                    <span className={currentHeading(currentState, 6)}> Information </span>
                </div>

                <div className="nameproperty">
                    <span className={currentTab(currentState, 7)}>7</span>
                    <span className={currentHeading(currentState, 7)}> Confirmation </span>
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
