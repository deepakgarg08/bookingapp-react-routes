import React from "react";
import { connect } from 'react-redux'
import { PAGE_STATE } from '../redux/actionTypes'


function Friendly(props) {

    const { elementProperty } = props
    console.log('elementProperty', elementProperty)

    const individualData = elementProperty.map((e) => {
        return (
            <span key={e.id}>
                <button id="friendly" onClick={handleEvent}>
                    <div id="cardprops">
                        <Avatar img={e.img} />
                        <UserName name={e.name} />
                    </div>
                </button>
            </span>
        )
    })

    function handleEvent() {
        console.log('.....prop',props)
        let newCurrentPageState = 'staff'
        //also needs to send location clicked
        props.changecurrentPageState(newCurrentPageState)
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

export default connect(mapStateToProps,mapDispatchToProps) (Friendly)