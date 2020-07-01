import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'
import { Link, NavLink } from 'react-router-dom'

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
        default: return 1

    }
}


function LeftContainerComponent(props) {
    let currentpagestate = props.init.currentPageState
    //this is for css
    const currentState = returnState(currentpagestate);
    console.log('currentState', currentState)
    return (

        // <div id="leftsidecontainer" >
        //     {/* <Link className="brand-logo" to="/" onClick={() => (props.changecurrentPageState('location'))}> Booking App</Link> */}

        //     <div id="leftcontainerdata" className="leftcontdata">

        //         <div className="nameproperty">
        //             <span className={currentTab(currentState, 1)}>1</span>
        //             <span className={currentHeading(currentState, 1)}>
        //                 <a className="nav-link" href="index.html"> Location </a>
        //                 <NavLink exact to="/" onClick={() => (props.changecurrentPageState('location'))}>Location </NavLink>
        //             </span>
        //         </div>
        //         <div className="nameproperty">
        //             <span className={currentTab(currentState, 2)}>2</span>
        //             <span className={currentHeading(currentState, 2)}>
        //                 <NavLink to="/" onClick={() => (props.changecurrentPageState('staff'))} > staff</NavLink>
        //             </span>
        //         </div>
        //         <div className="nameproperty">
        //             <span className={currentTab(currentState, 3)}>3</span>
        //             <span className={currentHeading(currentState, 3)}>
        //                 <NavLink to="/" onClick={() => (props.changecurrentPageState('services'))} >  Services </NavLink>
        //             </span>
        //         </div>
        //         <div className="nameproperty">
        //             <span className={currentTab(currentState, 4)}>4</span>
        //             <span className={currentHeading(currentState, 4)} >
        //                 <NavLink to="/" onClick={() => (props.changecurrentPageState('extraService'))} >  Service Extras </NavLink>
        //             </span>
        //         </div>

        //         <div className="nameproperty">
        //             <span className={currentTab(currentState, 5)}>5</span>
        //             <span className={currentHeading(currentState, 5)}>
        //                 <NavLink to="/" onClick={() => (props.changecurrentPageState('dateAndTime'))} >  Date and Time </NavLink>
        //             </span>
        //         </div>

        //         <div className="nameproperty">
        //             <span className={currentTab(currentState, 6)}>6</span>
        //             <span className={currentHeading(currentState, 6)}>
        //                 <NavLink to="/" onClick={() => (props.changecurrentPageState('information'))} > Information </NavLink>
        //             </span>
        //         </div>

        //         <div className="nameproperty">
        //             <span className={currentTab(currentState, 7)}>7</span>
        //             <span className={currentHeading(currentState, 7)}>
        //                 <NavLink to="/" onClick={() => (props.changecurrentPageState('confirmation'))} > Confirmation </NavLink>
        //             </span>
        //         </div>
        //         <div className="nameproperty">
        //             {/* <span className={currentTab(currentState, 8)}></span> */}
        //             <span className={currentHeading(currentState, 8)}>  </span>
        //         </div>
        //     </div>
        // </div>



        <div className="d-flex flex-column row-hl">

            <div className="navbar navbar-expand-sm mb-3">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars" style={{ "color": "#fff", "fontSize": "28px" }}></i>
                    </span>
                </button>

                {/* <div className="nameproperty">
                    <span className={currentTab(currentState, 7)}>7</span>
                    <span className={currentHeading(currentState, 7)}>
                        <NavLink to="/" onClick={() => (props.changecurrentPageState('confirmation'))} > Confirmation </NavLink>
                    </span>
                </div> */}


                <div className="collapse navbar-collapse nav-padding" id="navbarNav">
                    <ul className="navbar-nav flex-column nav-prop">

                        <li className="nav-item nameproperty">
                            <span id="myclass" className={currentTab(currentState, 1)} > 1</span>
                            <span className={currentHeading(currentState, 1)}>
                                <NavLink  className="nav-link"  exact to="/" onClick={() => (props.changecurrentPageState('location'))}>Location </NavLink>
                            </span>
                        </li>

                        <li className="nav-item nameproperty">
                            <span id="myclass" className={currentTab(currentState, 2)} > 2 </span>
                            <span className={currentHeading(currentState, 2)}>
                                <NavLink to="/" className="nav-link" onClick={() => (props.changecurrentPageState('staff'))} > staff</NavLink>
                            </span>
                        </li>

                        <li className="nav-item nameproperty">
                            <span id="myclass" className={currentTab(currentState, 3)} > 3 </span>
                            <span className={currentHeading(currentState, 3)}>
                                <NavLink to="/" className="nav-link" onClick={() => (props.changecurrentPageState('services'))} >  Services </NavLink>
                            </span>
                        </li>
                        <li className="nav-item nameproperty">
                            <span id="myclass" className={currentTab(currentState, 4)} > 4 </span>
                            <span className={currentHeading(currentState, 4)}>
                                <NavLink to="/" className="nav-link" onClick={() => (props.changecurrentPageState('extraService'))} > Extras </NavLink>
                            </span>
                        </li>
                        <li className="nav-item nameproperty ">
                            <span id="myclass" className={currentTab(currentState, 5)} > 5 </span>
                            <span className={currentHeading(currentState, 5)}>
                                <NavLink to="/" className="nav-link" onClick={() => (props.changecurrentPageState('dateAndTime'))} >  Date and Time </NavLink>
                            </span>
                        </li>
                        <li className="nav-item nameproperty">
                            <span id="myclass" className={currentTab(currentState, 6)} > 6 </span>
                            <span className={currentHeading(currentState, 6)}>
                                <NavLink to="/" className="nav-link" onClick={() => (props.changecurrentPageState('information'))} > Information </NavLink>
                            </span>
                        </li>
                        <li className="nav-item nameproperty">
                            <span id="myclass" className={currentTab(currentState, 7)} > 7 </span>
                            <span className={currentHeading(currentState, 7)}>
                                <NavLink to="/" className="nav-link" onClick={() => (props.changecurrentPageState('confirmation'))} > Confirmation </NavLink>
                            </span>
                        </li>
                        <li className="nav-item nameproperty">
                            <a className="nav-link" href="#"></a>
                        </li>
                    </ul>
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

const mapDispatchToPropsLocation = (dispatch, ownProps) => {

    return {
        changecurrentPageState: (currentPageState) => { dispatch({ type: actions.PAGE_STATE, payload: { currentPageState: currentPageState } }) }
    }

}

export default connect(mapStateToProps, mapDispatchToPropsLocation)(LeftContainerComponent)