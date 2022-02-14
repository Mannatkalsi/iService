import React from 'react'


function Online_Modal(props) {
    console.log(JSON.stringify(props));
    return (
        <div>
                <div><b>Task_Description:</b>{props.data.Description}</div><br/>
                <img src={props.data.Image} style={{ width: '100px', height: '100px' }} /><br/>
                <div><b>Due_Date:</b> {props.data.Date}</div><br/>
                <div><b>Payment_Type:</b> {props.data.Payment_type}</div><br/>
                <div><b>Budget:</b> ${props.data.Budget}</div><br/>
            </div>
        

    )
}

export default Online_Modal