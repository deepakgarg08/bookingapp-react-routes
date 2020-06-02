import React from "react";
import Friendly from "./Friendly";

class ServiceExtras extends React.Component {
    serviceData = {
        serviceProps: [

            { name: "Membrane", img: "water1.jpg", info: "aquaguards", id: 1 },
            { name: "Pipe", img: "geyser.jpg", info: "yoyo", id: 2 },
            { name: "Chimney", img: "water1.jpg", info: "ohh yeah", id: 3 },
            { name: "Gas know", img: "water1.jpg", info: "ohh yeah", id: 4 },
            { name: "Led bulb (RO)", img: "water1.jpg", info: "ohh yeah", id: 5 },
            { name: "Concealed", img: "geyser.jpg", info: "great", id: 6 },

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

export default ServiceExtras