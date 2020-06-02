import Friendly from './Friendly'
import React from "react";

class Services extends React.Component {
    serviceData = {
        serviceProps: [

            { name: "Eureka Forbes", img: "water1.jpg" , info: "aquaguards" , id : 1},
            { name: "Aquaguard", img: "geyser.jpg",  info: "yoyo", id : 2 },
            { name: "Reverse Osmosis (RO)", img: "water1.jpg" , info: "ohh yeah" , id : 3},
            { name: "Kent (RO)", img: "water1.jpg" , info: "ohh yeah" , id : 4},
            { name: "Aquasure (RO)", img: "water1.jpg" , info: "ohh yeah" , id : 5},
            { name: "water Geyser", img: "geyser.jpg" , info: "great" , id :6 },

        ]
    }

    render() {
        return (

            <div>
                <span><Friendly elementProperty={this.serviceData.serviceProps} /></span>
            </div>

        )
    }
}

export default Services