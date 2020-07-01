import React from "react";
import Friendly from './Friendly'

class Location extends React.Component {
    locationData = {
        locationProps: [
            { name: "Rohtak", img: "image1.jpg", id: 1 },
            { name: "Sampla", img: "image2.jpg", id: 2 },
            { name: "Kalanaur", img: "image3.jpg", id: 3 },
            { name: "Bhiwani", img: "image4.jpg", id: 4 },
            { name: "Delhi", img: "image5.jpg", id: 5 },
            { name: "Hisar", img: "image5.jpg", id: 6 },
            // { name: "Add new City", img: "image6.jpg", id: 6 }
        ]
    }
    render() {

        return (

            // <div>
            //     <span><Friendly elementProperty={this.locationData.locationProps} /></span>
            // </div>

            <div id="rightcontainer">
                <div className="container container-fluid">
                    <div className="row no-gutters">
                    <Friendly elementProperty={this.locationData.locationProps} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Location