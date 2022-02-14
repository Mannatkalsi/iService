import React from "react";
import "./Content.css"
import Suburb from "./Suburb";

function Date(props){    
    return(
        <div className="task-s-div">
            {props.isTypePerson ? <Suburb onChange={props.onChange} /> : null}           
            <div className="task-s-date-div">
                <div className="task-date-div">
                    <div className="task-date-p-div">
                        <p className="task-date-p">Date</p>
                    </div>
                    <input type="date" name="task_date" placeholder="Enter a date" onChange={props.onChange} required="true" font-family= "Arial, Helvetica, sans-serif"/>
                </div>
            </div>
        </div>
    )
}

export default Date