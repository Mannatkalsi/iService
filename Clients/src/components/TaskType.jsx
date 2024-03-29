import React from "react";
import "./Content.css"

function TaskType(prop){
    return(
        <div className="task-type-div">
            <p className="task-type-p">Select Task Type:</p>
            <div>
                <label for="type1">
                    <input id="type1" type="radio" name="task_type" value="person" defaultChecked onChange={prop.typeChange} required/>
                    <span>In-person</span>
                </label> 
            </div>
            <div>
                <label for="type2">
                    <input id="type2" type="radio" name="task_type" value="online" onChange={prop.typeChange}/> 
                    <span>Online</span>
                </label>
            </div>
        </div>
    )
}

export default TaskType