import React from "react";
import Friendly from './Friendly'

class Staff extends React.Component {

    staffData = {
        staffProps: [

            { name: "Spider Man", img: "spiderman.png", info: "1123456789", id: 1 },
            { name: "Ant Man", img: "antman.jpg", info: "2123456789", id: 2 },
            { name: "Bat Man", img: "batman.jpg", info: "3123456789", id: 3 },
            { name: "Iron Man", img: "ironman.jpg", info: "4123456789", id: 4 },
            { name: "Wonder Woman", img: "ww.jpeg", info: "5123456789", id: 5 },
            { name: "Black Panther", img: "bp.png", info: "6123456789", id: 6 }

            
            // { name: "Spider Man", img: "https://source.unsplash.com/random/203x201", info: "1123456789", id: 1 },
            // { name: "Ant Man",    img: "https://source.unsplash.com/random/202x201", info: "2123456789", id: 2 },
            // { name: "Bat Man",    img: "https://source.unsplash.com/random/207x202", info: "3123456789", id: 3 },
            // { name: "Iron Man",   img: "https://source.unsplash.com/random/200x209", info: "4123456789", id: 4 },
            // { name: "Super Man",  img: "https://source.unsplash.com/random/199x201", info: "5123456789", id: 5 },
            // { name: "He Man",     img: "https://source.unsplash.com/random/198x200", info: "6123456789", id: 6 }

        ]
    }

    render() {
        return (

       
            <div id="rightcontainer">
                <div className="container container-fluid">
                    <div className="row no-gutters">
                        <Friendly elementProperty={this.staffData.staffProps} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Staff