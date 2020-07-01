import React from 'react';
import RightContainerComponent from './RightContainer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { PAGE_STATE } from '../redux/actionTypes'
import { connect } from 'react-redux'

function MainPage(props) {
    return (


        <div className="d-flex mx-auto">

            <div className="container container-fluid">
                <h2 className="text-center my-3 text-warning">
                    <Link className="brand-logo" to="/" onClick={() => (props.changecurrentPageState('location'))}> Booking App</Link>
                </h2>

                <div className="row no-gutters">
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-left leftcontainer bg-black">
                        <Navbar />
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 h-100">
                        <RightContainerComponent />
                    </div>

                </div>
            </div>
        </div>


    );
}

const mapStateToProps = (state) => {
    return {
        init: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changecurrentPageState: (currentPageState) => {
            dispatch({ type: PAGE_STATE, payload: { currentPageState: currentPageState } })
        }
    }

}
// export default MainPage;

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

