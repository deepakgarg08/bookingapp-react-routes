import React from "react";
import Friendly from './Friendly'

class Staff extends React.Component {

    staffData = {
        staffProps: [

            { name: "Spider Man", img: "spiderman.png" , info: "1123456789" , id : 1},
            { name: "Ant Man", img: "antman.png",  info: "2123456789", id : 2 },
            { name: "Bat Man", img: "batman.jpg" , info: "3123456789" , id : 3},
            { name: "Iron Man", img: "ironman.jpg" , info: "4123456789" , id :4 },
            { name: "Super Man", img: "superman.png",  info: "5123456789" , id :5 },
            { name: "He Man", img: "Heman.jpeg", info: "6123456789" , id :6 }

        ]
    }

    render() {
        console.log('staff comp fired')
        return (

            <div>
                <span><Friendly elementProperty={this.staffData.staffProps} /></span>
            </div>

        )
    }
}

export default Staff