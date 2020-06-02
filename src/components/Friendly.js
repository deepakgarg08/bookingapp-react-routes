import React from "react";
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'


function Friendly(props) {

    const { elementProperty } = props
    console.log('props', props)


    const individualData = elementProperty.map((e) => {
        return (
            <span key={e.id}>
                <button id="friendly" onClick={(event) => handleEvent(e.name, e.price)}>
                    <div id="cardprops">
                        <Avatar img={e.img} />
                        <UserName name={e.name} />
                        {e.price ? <span>{e.price} Rs   </span> : null}
                    </div>
                </button>
            </span>
        )
    })

    return (
        <>
            {individualData}
        </>
    );

    function handleEvent(name, price = 0) {
        console.log('price', price)

        let newCurrentPageState = props.init.currentPageState //location
        console.log('props in friendly', props)

        if (newCurrentPageState === 'location') {
            props.changecurrentPageState('staff')
            props.newLocationValue(name)

        }
        else if (newCurrentPageState === 'staff') {
            props.changecurrentPageState('services') //this will be changed later on to services
            props.newstaffValue(name)
        }
        else if (newCurrentPageState === 'services') {
            props.changecurrentPageState('extraService') //this will be changed later on to services
            props.newservicesValue({ name, price })
        }
        else if (newCurrentPageState === 'extraService') {
            props.changecurrentPageState('dateAndTime') //this will be changed later on to services
            props.extraService({ name, price })
        } else {
            console.log(' i m fired in frinedly compon...not a good news', name)
        }

    }


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
        newstaffValue: (staff) => { dispatch({ type: actions.STAFF, payload: { staff: staff } }) },
        newservicesValue: (services) => { dispatch({ type: actions.SERVICES, payload: { services: services } }) },
        extraService: (extraService) => { dispatch({ type: actions.EXTRA_SERVICES, payload: { extraService: extraService } }) },


    }

}


export default connect(mapStateToProps, mapDispatchToPropsLocation)(Friendly)