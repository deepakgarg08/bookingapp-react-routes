import React from 'react';
import LeftContainerComponent from './LeftContainer'
import RightContainerComponent from './RightContainer'
import Navbar from './Navbar'
function MainPage() {

    return (
        // <div>
        //     <Navbar />


        // </div>


        <div className="MainPage">
            <h1 id="h1"> Welcome to booking app</h1>
            <div id="Wrapper">
                <div id="container">
                    <Navbar />

                    <div id="rightsidecontainer">
                        <div id="rightcontainerdata">
                            <RightContainerComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

































export default MainPage;
