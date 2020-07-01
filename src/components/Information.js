import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actionTypes'

// const validEmailRegex = RegExp(
//     /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// );
const validateForm = statedata => {
    let check = Object.values(statedata)
    for (let i = 0; i < check.length; i++) {
        if (i === 2) {
            continue
        } else if (check[i] === null || check[i].length === 0) {
            return false
        }
    }
    return true
};

class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            address: null,
            additionalInfo: null,
            mobile: null,
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("this.state", this.state)

        if (validateForm(this.state)) {
            console.info('Valid Form')
            let newCurrentPageState = this.props.init.currentPageState //information

            if (newCurrentPageState === "information") {
                this.props.changecurrentPageState('confirmation')
                this.props.changeInformation(this.state)

            }
        } else {
            console.error('Invalid Form')
            alert('please enter correct details')
        }
    }

    render() {
        return (

            <div className='wrapper' id="rightcontainer">
                <h4>Please Fill Your information</h4>
                <br />
                <div className='form-group'>


                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className='form-group col-md-6' style={{ float: "left" }}>
                            <label htmlFor="fullName">Full Name*</label>
                            <input type='text' className="form-control" name='fullName' onChange={this.handleChange} noValidate />
                        </div>


                        <div className='form-group col-md-6' style={{ float: "right" }}>
                            <label htmlFor="address">address*</label>
                            <input type='text' className="form-control" name='address' onChange={this.handleChange} noValidate />
                        </div>

                        <div className='form-group col-md-6' style={{ float: "left" }} >
                            <label htmlFor="mobile">mobile*</label>
                            <input type='text' className="form-control" name='mobile' onChange={this.handleChange} noValidate />
                        </div>

                        <div className='form-group col-md-6' style={{ float: "right" }} >
                            <label htmlFor="additionalInfo">additionalInfo</label>
                            <input type='text' className="form-control" name='additionalInfo' onChange={this.handleChange} noValidate />
                        </div>

                        <div className='submit' id = "informationdiv">
                            <button id="confirmationbutton">Next</button>
                        </div>
                        
                    </form>

                </div>

                
            </div>
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
        changecurrentPageState: (currentPageState) => {
            dispatch({ type: actions.PAGE_STATE, payload: { currentPageState: currentPageState } })
        },
        changeInformation: (information) => {
            dispatch({ type: actions.INFORMATION, payload: { information: information } })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToPropsLocation)(Information)