import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'

class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phone: null,
            address: '',
            AdditionalInfo :''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        // if (nam === "age") {
        //     if (val != "" && !Number(val)) {
        //         err = <strong>Your age must be a number</strong>;
        //     }
        // }
        this.setState({ [nam]: val });

    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newCurrentPageState = this.props.init.currentPageState //information

        console.log("i m fired form subbmittions", this.state)
        if (newCurrentPageState === "information") {
            this.props.changecurrentPageState('confirmation')
            this.props.changeInformation(this.state)

        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Please Enter your Info </h1>
                <p>FullName:</p>
                <input
                    type='text'
                    name='fullname'
                    onChange={this.myChangeHandler}
                />
                <p>Phone:</p>
                <input
                    type='number'
                    name='phone'
                    onChange={this.myChangeHandler}
                />
                <p>Address:</p>
                <input
                    type='text'
                    name='address'
                    onChange={this.myChangeHandler}
                />
                <p>AdditionalInfo:</p>
                <input
                    type='text'
                    name='AdditionalInfo'
                    onChange={this.myChangeHandler}
                />

                <br />
                <button>Next</button>

            </form>
        );
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
        changeInformation: (information) => { dispatch({ type: actions.INFORMATION, payload: { information: information } }) },
    }
}

export default connect(mapStateToProps, mapDispatchToPropsLocation)(Information)



