import React from "react";
import "./Content.css"

function Suburb(props){
    return(
        <div className="suburb-div">
            <div className="suburb-p-div">
                <p className="suburb-p">Suburb</p>
            </div>
            <input type="text" name="task_suburb" placeholder="Enter a suburb" onChange={props.onChange}/>
        </div>
    )
}

export default Suburb