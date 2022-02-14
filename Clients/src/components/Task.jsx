import React from 'react'
import './Task.css'
function Tasks(props) {
    //console.log(JSON.stringify(props));
    return (
        <div className="column" onClick={() => props.handleShow(props.id)}>
            <div className="card">
                <div>
                    <span className="close" id={props.id} onClick={props.handleDelete}>X</span>
                </div>
                <h4>{props.Task_type[0].toUpperCase() + props.Task_type.substring(1)} Task</h4>
                <p><b>Title:</b> {props.Tittle}</p>
                <p>{props.Description}</p>
                <p>{props.Date}</p>
                <p>{props.Suburb}</p>

            </div>
        </div>
    )
}

export default Tasks