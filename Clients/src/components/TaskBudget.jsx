import React from "react";
import "./Content.css"

function TaskBudget(props) {
    return (
        <div className="task-budget-div">
            <label className="Budget-p">Enter Amount:</label>
            <input className="task-budget-input" type="text" name="budget" placeholder="$" onChange={props.onChange} required />
        </div>

    )
}

export default TaskBudget