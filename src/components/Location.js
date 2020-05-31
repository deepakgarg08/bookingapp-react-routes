import React from "react";
//this is home page
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {PAGE_STATE } from '../redux/actionTypes'

class Location extends React.Component {

    handleClick = ()=>{
        let newCurrentPageState = 'staff'
        this.props.changecurrentPageState(newCurrentPageState)
    }

    render() {
        return (
            <div className="container">
                <h4 className="center">Location</h4>
                <button className="center btn red" onClick={this.handleClick}>change State</button>
                <p>  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.m</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        init: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changecurrentPageState : (currentPageState) => { dispatch ({type: 'PAGE_STATE', currentPageState:currentPageState})}
        // changecurrentPageState: () => dispatch({ type: 'RESET' })
    }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Location)