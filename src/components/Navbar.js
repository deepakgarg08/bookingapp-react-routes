import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import LeftContainerComponent from './LeftContainerComponent'
class Navbar extends React.Component {
    render() {


        return (
            <LeftContainerComponent/>
            // <div className="container">
            //     <div className="row">
            //         <div className="col">
            //             {/* <nav className="navbar bg-light"> */}
            //             <Link className="brand-logo" to="/"> Booking App</Link>
            //             <ul className="right">
            //                 <li className="nav-item" ><NavLink exact to="/">Location</NavLink>  </li>
            //                 {/* className = "nav-item" <li><NavLink  to="/location">Location</NavLink>  </li>*/}
            //                 <li className="nav-item" ><NavLink to="/staff">Staff</NavLink>  </li>
            //                 <li className="nav-item" ><NavLink to="/services">Services</NavLink>  </li>
            //                 <li className="nav-item" ><NavLink to="/serviceextras">ServiceExtras</NavLink>  </li>
            //                 <li className="nav-item" ><NavLink to="/datetime">DateTime</NavLink>  </li>
            //                 <li className="nav-item" ><NavLink to="/information">Information</NavLink>  </li>
            //                 <li className="nav-item" ><NavLink to="/confirmation">Confirmation</NavLink>  </li>
            //             </ul>
            //             {/* </nav> */}
            //         </div>
            //     </div>
            // </div>
        )
    }
}







// export default Navbar
//withRouter provides props properties
export default withRouter(Navbar);



