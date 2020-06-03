import React from "react";
import Location from './Location'
import Staff from './Staff'
import Services from './Services'


import { connect } from 'react-redux'
import { PAGE_STATE } from '../redux/actionTypes'
import ServiceExtras from "./ServiceExtras";
import DateTime from "./DateTime";
import Information from './Information'
import Confirmation from './Confirmation'

class RightContainerComponent extends React.Component {


    render() {
        let CurrentPageState = this.props.init.currentPageState

        switch (CurrentPageState) {
            case 'location': return (<div><Location /></div>);
            case 'staff': return (<Staff />);
            case 'services': return (<Services />);
            case 'extraService': return (<ServiceExtras />);
            case 'dateAndTime': return (<DateTime />);
            case 'information': return (<Information />);
            case 'confirmation': return (<Confirmation />);
            default: return (<Location />);
        }
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        init: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changecurrentPageState: (currentPageState) => { dispatch({ type: PAGE_STATE, payload: { currentPageState: currentPageState } }) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(RightContainerComponent)





