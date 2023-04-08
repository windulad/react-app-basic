import React from "react";

function User(props){
    return(
        <>
            <h1>My name is {props.name}</h1>
            <p>I'm a {props.expertise}</p>
        </>
    )
}

export default User;