import React from "react";
import "./Content.css"

function Describe(props) {
    return (
        <div>
            <div className="describe-div">
                <div className="task-title-div">
                    <div className="task-title-p-div">
                        <p className="task-title-p">Task Title</p>
                    </div>
                    <input type="text" name="task_tittle" placeholder="Enter task title" onChange={props.onChange} required />
                </div>
                <div className="description-div">
                    <div className="description-p-div">
                        <p className="description-p">Description</p>
                    </div>
                    <textarea name="task_description" placeholder="Enter task description" rows="5" onChange={props.onChange} required/>
                </div>
                

            </div>

        </div>
    )
}

export default Describe

