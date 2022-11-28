import React from "react";
import Profile from "./Profile";

const Player = (props) => {
    return (
        <section>
            <h1 className="header">{props.label}</h1>
            <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
            <Profile info={props.profile} />
        </section>
    )
}

export default Player;