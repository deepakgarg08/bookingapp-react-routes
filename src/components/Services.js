import React from "react";

class Services extends React.Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div className="container">
                <h4 className="center">Services</h4>
                <p>  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.m</p>
            </div>
        )
    }
}

export default Services