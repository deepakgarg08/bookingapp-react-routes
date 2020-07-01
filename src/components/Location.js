import React from "react";
import Friendly from './Friendly'

class Location extends React.Component {
    locationData = {
        locationProps: [
            // { name: "Rohtak", img: "image1.jpg", id: 1 },
            // { name: "Sampla", img: "image2.jpg", id: 2 },
            // { name: "Kalanaur", img: "image3.jpg", id: 3 },
            // { name: "Bhiwani", img: "image4.jpg", id: 4 },
            // { name: "Delhi", img: "image5.jpg", id: 5 },
            // { name: "Hisar", img: "image5.jpg", id: 6 }

            { name: "Paderborn", img: "image1.jpeg", id: 1 },
            { name: "Bielefeld", img: "image2.jpeg", id: 2 },
            { name: "Frankfurt", img: "image3.jpeg", id: 3 },
            { name: "Delhi", img: "image4.jpeg", id: 4 },
            { name: "Rohtak", img: "image5.jpeg", id: 5 },
            { name: "Mumbai", img: "image6.jpeg", id: 6 }
            
            // { name: "Add new City", img: "image6.jpg", id: 6 }

            //comment below code

            // { name: "Paderborn", img: "https://source.unsplash.com/random/200x200", id: 1 },
            // { name: "Bielefeld", img: "https://source.unsplash.com/random/201x200", id: 2 },
            // { name: "Frankfurt", img: "https://source.unsplash.com/random/200x202", id: 3 },
            // { name: "Delhi",     img: "https://source.unsplash.com/random/202x200", id: 4 },
            // { name: "Rohtak",    img: "https://source.unsplash.com/random/200x201", id: 5 },
            // { name: "Mumbai",    img: "https://source.unsplash.com/random/203x200", id: 6 }
        ]
    }
    // https://source.unsplash.com/random/200x200
    render() {

        return (

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