import React from "react";


function LeftContainerComponent() {
    return (
        <div id="leftsidecontainer" >
            <div id="leftcontainerdata" className="leftcontdata">
                <div className="nameproperty">
                    <span className="circleonclick">1</span>
                    <span className="headings"> Location </span>
                </div>
                <div className="nameproperty">
                    <span className="circlebeforeclick">2</span>
                    <span> staff </span>
                </div>
                <div className="nameproperty">
                    <span className="circlebeforeclick">3</span>
                    <span> Services </span>
                </div>
                <div className="nameproperty">
                    <span className="circlebeforeclick">4</span>
                    <span> Service Extras </span>
                </div>

                <div className="nameproperty">
                    <span className="circlebeforeclick">5</span>
                    <span> Date and Time </span>
                </div>

                <div className="nameproperty">
                    <span className="circlebeforeclick">6</span>
                    <span> Information </span>
                </div>

                <div className="nameproperty">
                    <span className="circlebeforeclick">7</span>
                    <span> Confirmation </span>
                </div>
            </div>
        </div>
    );
}

export default LeftContainerComponent