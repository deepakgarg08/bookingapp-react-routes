import React from 'react';
import {withRouter } from 'react-router-dom'
import LeftContainerComponent from './LeftContainerComponent'
class Navbar extends React.Component {
    render() {
        return (
            <LeftContainerComponent/>
        )
    }
}


//withRouter provides props properties, its supercharge Navbar COmponent
//withRouter is not used, for experiment purpose its written here
export default withRouter(Navbar);
