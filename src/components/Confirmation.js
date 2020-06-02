import React from "react";

class Confirmation extends React.Component {

    request_id = parseInt(Math.random() *1000)

    render() {
        return (
            <div className="container">
                <h1 className="center">Confirmation</h1><br/>
                <h3 id = "h3_">Thank you for your request!</h3><br/>
                <h4>   Your confirmation id is: </h4><br/>
                <h2>{this.request_id}</h2><br/>
            </div>
        )
    }
}

export default Confirmation