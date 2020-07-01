import React from "react";
import Friendly from "./Friendly";

class ServiceExtras extends React.Component {
    serviceData = {
        serviceProps: [

            { name: "Membrane", img: "water1.jpg", price: "100", id: 1 },
            { name: "Pipe", img: "geyser.jpg", price: "200", id: 2 },
            { name: "Chimney", img: "water1.jpg", price: "500", id: 3 },
            { name: "Gas know", img: "water1.jpg", price: "100", id: 4 },
            { name: "Led bulb (RO)", img: "water1.jpg", price: "100", id: 5 },
            { name: "Concealed", img: "geyser.jpg", price: "400", id: 6 },

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

export default ServiceExtras