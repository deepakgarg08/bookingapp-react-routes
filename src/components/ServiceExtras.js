import React from "react";
import Friendly from "./Friendly";

class ServiceExtras extends React.Component {
    serviceData = {
        serviceProps: [

            { name: "Membrane", img: "membrane.jpg", price: "100", id: 1 },
            { name: "Pipe", img: "pipe.jpeg", price: "200", id: 2 },
            { name: "UV Choke", img: "uvchoke.jpg", price: "500", id: 3 },
            { name: "Filter", img: "filter.jpg", price: "100", id: 4 },
            { name: "Carbon Filter", img: "cf.jpg", price: "100", id: 5 },
            { name: "TDS controller", img: "tds.jpeg", price: "400", id: 6 }

            // { name: "Membrane",     img: "https://source.unsplash.com/random/203x201", price: "100", id: 1 },
            // { name: "Pipe",         img: "https://source.unsplash.com/random/202x201", price: "200", id: 2 },
            // { name: "Chimney",      img: "https://source.unsplash.com/random/207x202", price: "500", id: 3 },
            // { name: "Gas know",     img: "https://source.unsplash.com/random/200x209", price: "100", id: 4 },
            // { name: "Led bulb (RO)",img: "https://source.unsplash.com/random/199x201", price: "100", id: 5 },
            // { name: "Concealed",    img: "https://source.unsplash.com/random/198x200", price: "400", id: 6 }
            
            
            
            
            
            
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