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
            { name: "Add new City", img: "image6.jpg", id: 6 }
        ]
    }
    render() {
    

        return (

            <div>
                <span><Friendly elementProperty={this.locationData.locationProps} /></span>
            </div>


        )
    }
}

export default Location