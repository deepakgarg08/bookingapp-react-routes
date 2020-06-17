import React from 'react';
import './App.css';

import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Location from './components/Location'
import Staff from './components/Staff'
import Services from './components/Services'
import ServiceExtras from './components/ServiceExtras'
import DateTime from './components/DateTime'
import Information from './components/Information'
import Confirmation from './components/Confirmation'
import MainPage from "./components/MainPage";

//..

class App extends React.Component {
    render() {
        return (

            <MainPage/>


            // <BrowserRouter>
            //     <div className="App">
            //         {/* <Navbar /> */}
            //         <Switch>
            //             <Route exact path="/" component={MainPage} />
            //             {/* <Route path="/Loca3tion" component={Location}/> */}
            //             {/* <Route path="/Staff" component={Staff} />
            //             <Route path="/Services" component={Services} />
            //             <Route path="/ServiceExtras" component={ServiceExtras} />
            //             <Route path="/DateTime" component={DateTime} />
            //             <Route path="/Information" component={Information} />
            //             <Route path="/Confirmation" component={Confirmation} /> */}
            //         </Switch>

            //     </div>
            // </BrowserRouter>

        );
    }
}



export default App;
