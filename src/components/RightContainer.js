import React from "react";
import Location from './Location'
import Staff from './Staff'

import { connect } from 'react-redux'
import { PAGE_STATE } from '../redux/actionTypes'

class RightContainerComponent extends React.Component {


    render() {
        let CurrentPageState =  this.props.init.currentPageState
        // console.log('CurrentPageState', CurrentPageState)

        switch(CurrentPageState){
            case 'location':{
                return (
                    <div>
                        <Location/>
                    </div>
    
                );
            }
            case 'staff':{
                return (
                    <div>
                        <Staff/>
                    </div>
    
                );
            }
             default:
                 console.log('hello default')
                break
        }






        // if (CurrentPageState === 'location') {
        //     return (
        //         <div>
        //             <Location/>
        //             {/* {<CurrentPageState />} */}
        //         </div>

        //     );
        // }
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





