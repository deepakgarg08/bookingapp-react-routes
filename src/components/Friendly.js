import React from "react";
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'


function Friendly(props) {

    const { elementProperty } = props


    const individualData = elementProperty.map((e) => {
        return (
       
            <div className="col-md-4 no-gutters"  key={e.id}>
                <div className="card">
                    <button className="friendly" onClick={(event) => handleEvent(e.name, e.price)}>
                        <canvas className="header-bg" width="250" height="70"></canvas>
                        <div className="avatar">
                            <img className="img img-fluid" src={e.img} alt={e.name} />
                          
                        </div><br />
                        <div className="content">
                            <p>{e.name} <br />
                                <small> {e.price ? <span>{e.price} Rs   </span> : "."}</small>
                            </p>
                        </div>
                    </button>
                </div>
            </div>

        )
    })

    return (
        <>
            {individualData}
        </>
    );

    function handleEvent(name, price = 0) {

        let newCurrentPageState = props.init.currentPageState //location

        if (newCurrentPageState === 'location') {
            props.changecurrentPageState('staff')
            props.newLocationValue(name)

        }
        else if (newCurrentPageState === 'staff') {
            props.changecurrentPageState('services')
            props.newstaffValue(name)
        }
        else if (newCurrentPageState === 'services') {
            props.changecurrentPageState('extraService')
            props.newservicesValue({ name, price })
        }
        else if (newCurrentPageState === 'extraService') {
            props.changecurrentPageState('dateAndTime')
            props.extraService({ name, price })
        } else {
        }

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
        newLocationValue: (location) => { dispatch({ type: actions.LOCATION, payload: { location: location } }) },
        newstaffValue: (staff) => { dispatch({ type: actions.STAFF, payload: { staff: staff } }) },
        newservicesValue: (services) => { dispatch({ type: actions.SERVICES, payload: { services: services } }) },
        extraService: (extraService) => { dispatch({ type: actions.EXTRA_SERVICES, payload: { extraService: extraService } }) },


    }

}


export default connect(mapStateToProps, mapDispatchToPropsLocation)(Friendly)