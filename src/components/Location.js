import React from "react";
import Friendly from './Friendly'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PAGE_STATE } from '../redux/actionTypes'
import './MainPage.css'

class Location extends React.Component {
    locationData = {
        locationProps: [
            { name: "Rohtak", img: "image1.jpg", id: 1 },
            { name: "Sampla", img: "image2.jpg", id: 2 },
            { name: "Kalanaur", img: "image3.jpg", id: 3 },
            { name: "Bhiwani", img: "image4.jpg", id: 4 },
            { name: "Delhi", img: "image5.jpg", id: 5 },
            { name: "Add new City", img: "image6.jpg", id: 6 }
        ]
    }
    handleClick = () => {
        let newCurrentPageState = 'staff'
        //also needs to send location clicked
        this.props.changecurrentPageState(newCurrentPageState)
    }

    render() {
        return (
            // <div className="">
            //     {/* <h4 className="center">Location</h4> */}
            //     <span><Friendly locationProps={this.locationData.locationProps} /></span>
            //     {/* <button className="center btn red" onClick={this.handleClick}>change State</button> */}

            //     {/* <p>  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.m</p> */}
            // </div>

            <div>
                <span><Friendly locationProps={this.locationData.locationProps} /></span>
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
        changecurrentPageState: (currentPageState) => { dispatch({ type: PAGE_STATE, payload: { currentPageState: currentPageState } }) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Location)