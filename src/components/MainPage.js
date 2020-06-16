import React from 'react';
import './MainPage.css'
import LeftContainerComponent from './LeftContainer'
import RightContainerComponent from './RightContainer'

function MainPage() {


   
    return (

        <div className="MainPage">
            <h1 id="h1"> Welcome to booking app</h1>
            <div id="Wrapper">
                <div id="container">
                    <LeftContainerComponent />
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
