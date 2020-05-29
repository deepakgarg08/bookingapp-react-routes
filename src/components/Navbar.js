import React from 'react';
import { Link, NavLink , withRouter} from 'react-router-dom'

class Navbar extends React.Component {
        render() {

        // console.log("check props navbar:", this.props)

        return (
            <nav className="nav-wrapper red-darken-3">
                <div className="container">
                    <Link className="brand-logo" to="/"> Booking App</Link>
                    <ul className="right">
                        <li><NavLink exact to="/">Location</NavLink>  </li>
                        <li><NavLink  to="/staff">Staff</NavLink>  </li>
                        <li><NavLink to="/services">Services</NavLink>  </li>
                        <li><NavLink to="/serviceextras">ServiceExtras</NavLink>  </li>
                        <li><NavLink to="/datetime">DateTime</NavLink>  </li>
                        <li><NavLink to="/information">Information</NavLink>  </li>
                        <li><NavLink to="/confirmation">Confirmation</NavLink>  </li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default Navbar
// export default withRouter(Navbar);
