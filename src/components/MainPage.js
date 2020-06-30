import React from 'react';
import RightContainerComponent from './RightContainer'
import Navbar from './Navbar'
function MainPage() {
    return (
        // <div className="MainPage">
        //     <h1 id="h1"> Welcome to booking app</h1>
        //     <div id="Wrapper">
        //         <div id="container">
        //             <Navbar />
        //             <div id="rightsidecontainer">
        //                 <div id="rightcontainerdata">
        //                     <RightContainerComponent />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div className="d-flex mx-auto">
    
            <div className="container container-fluid">
                <h2 className="text-center my-3 text-warning">Welcome to Booking App</h2>

                <div className="row no-gutters">
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-left leftcontainer bg-black">
                        {/* leftcontainercomponent */}
                        <Navbar />
                        <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 h-100">
                        {/* RIghtcontainercomponent */}
                        <RightContainerComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );
}

export default MainPage;
