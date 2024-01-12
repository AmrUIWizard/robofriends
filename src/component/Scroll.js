import React from "react";

const Scroll = (props) => {
    return (
        <div className="ma3" style={{borderTop: '5px solid black'}}>
            {props.children}
        </div>
    )
};

export default Scroll;