import React from "react";
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'
import { Redirect } from "react-router-dom";


function Friendly(props) {

    const { elementProperty } = props

    const individualData = elementProperty.map((e) => {
        return (
            <span key={e.id}>
                <button id="friendly" onClick={(event) => handleEvent(e.name)}>
                    <div id="cardprops">
                        <Avatar img={e.img} />
                        <UserName name={e.name} />
                    </div>
                </button>
            </span>
        )
    })

    function handleEvent(name) {
        let newCurrentPageState = props.init.currentPageState //location


        if (newCurrentPageState === 'location') {
            props.changecurrentPageState('staff')
            props.newLocationValue(name)

        }
        else if (newCurrentPageState === 'staff') {
            props.changecurrentPageState('staff') //this will be changed later on to services
            props.newstaffValue(name)
        }

        
            // <Redirect
            //   to={{
            //     pathname: "/signin",
            //     state: { from: props.location },
            //   }}
            // />
          

    }

    return (
        <>
            {individualData}
        </>
    );
}
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

//redux mappings
const mapStateToProps = (state, ownProps) => {
    return {
        init: state
    }
}

const mapDispatchToPropsLocation = (dispatch, ownProps) => {

    return {

        changecurrentPageState: (currentPageState) => { dispatch({ type: actions.PAGE_STATE, payload: { currentPageState: currentPageState } }) },
        newLocationValue: (location) => { dispatch({ type: actions.LOCATION, payload: { location: location } }) },
        newstaffValue: (staff) => { dispatch({ type: actions.STAFF, payload: { staff: staff } }) }

    }

}


export default connect(mapStateToProps, mapDispatchToPropsLocation)(Friendly)