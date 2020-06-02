import React from "react";
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes'

class Confirmation extends React.Component {


    render() {
        console.log("check props in confirmaiton:", this.props)

        return (
            <div id="veryouter">
                <div id="outerdiv">
                    <div id="innerdivconfirmaiton">
                        <div id="friendlyprops">
                            <Friendly flag='a' />
                        </div>
                        <div>
                            <Friendly flag='b' />
                        </div>
                        <div>
                            <Friendly flag='c' />
                        </div>
                        <div id="friendlyprops">
                            <Friendly flag='d' />
                        </div>
                    </div>
                </div>

                {/* <Friendly flag = 'b'/>
                <Friendly flag = 'c'/> */}

            </div>
        )
    }
}




function Friendly(props) {

    const { elementProperty } = props
    console.log('props', props)


    let handleEvent = (props) => {
        console.log(".................", props)
    }
    let flag = props.flag
    console.log('flag', flag)

    switch (flag) {
        case 'a': {
            return (
                <>
                    <span>
                        <button id="friendly1" onClick={handleEvent}>
                            <div>
                                {console.log('a')}
                                {/* <Avatar img={e.img} /> */}
                                {/* <UserName name={e.name} /> */}
                                {/* {e.price ? <span>{e.price} Rs   </span> : null} */}
                            </div>
                        </button>
                    </span>
                </>
            );
        }

        case 'b': {
            return (
                <>
                    <span>
                        <button id="friendly2" onClick={handleEvent}>
                            <div>
                                {console.log('b')}
                            </div>
                        </button>
                    </span>
                </>
            );
        }
        case 'c': {
            let style = {
                height: "20"
            }
            return (
                <>
                    <div>
                        <button id="friendly3" onClick={handleEvent} style={style}>
                            <div>
                                {console.log('c')}
                            </div>
                        </button>
                    </div>
                </>
            );


        }

        case 'd': {
            return (
                <>
                    <span>
                        <button id="friendly4" onClick={handleEvent}>
                            <div>
                                {console.log('a')}
                                {/* <Avatar img={e.img} /> */}
                                {/* <UserName name={e.name} /> */}
                                {/* {e.price ? <span>{e.price} Rs   </span> : null} */}
                            </div>
                        </button>
                    </span>
                </>
            );
        }
        default:
            console.log('check flag in default', flag)

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
        // newLocationValue: (location) => { dispatch({ type: actions.LOCATION, payload: { location: location } }) },
        // newstaffValue: (staff) => { dispatch({ type: actions.STAFF, payload: { staff: staff } }) },
        // newservicesValue: (services) => { dispatch({ type: actions.SERVICES, payload: { services: services } }) },
        // extraService: (extraService) => { dispatch({ type: actions.EXTRA_SERVICES, payload: { extraService: extraService } }) },


    }

}
export default connect(mapStateToProps, mapDispatchToPropsLocation)(Confirmation)
