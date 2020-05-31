import React from "react";

function Friendly(props) {

    const { locationProps } = props
    console.log('locationProps', locationProps)
    const individualLocationData = locationProps.map((e) => {
        return (
            <span key={e.id}>
                <button id="friendly" onClick={handleEvent}>
                    <div id="cardprops">
                        <Avatar img={e.img} />
                        <UserName name={e.name} />
                    </div>
                </button>
            </span>
        )
    })

    function handleEvent() {
        console.log(props)
    }

    return (
        <>
            {individualLocationData}
        </>
    );
}
//avatar complex component
function Avatar(props) {
    return (
        < img src={props.img} alt="Spider Man" height="400px" id="avatar" />
    );
}

//username component

function UserName(props) {
    return (
        <h1 id="username">{props.name}</h1>
    );
}


export default Friendly