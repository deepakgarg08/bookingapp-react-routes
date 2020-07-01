import Friendly from './Friendly'
import React from "react";

class Services extends React.Component {
    serviceData = {
        serviceProps: [

            { name: "Eureka Forbes", img: "water1.jpg", price: "100", id: 1 },
            { name: "Aquaguard", img: "geyser.jpg", price: "500", id: 2 },
            { name: "Reve Osmosis (RO)", img: "water1.jpg", price: "1000", id: 3 },
            { name: "Kent (RO)", img: "water1.jpg", price: "2000", id: 4 },
            { name: "Aquasure (RO)", img: "water1.jpg", price: "500", id: 5 },
            { name: "water Geyser", img: "geyser.jpg", price: "5000", id: 6 },

        ]
    }

    render() {
        return (

          

            <div id="rightcontainer">
                <div className="container container-fluid">
                    <div className="row no-gutters">
                    <Friendly elementProperty={this.serviceData.serviceProps} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Services