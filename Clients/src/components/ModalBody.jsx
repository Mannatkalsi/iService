import React from "react";
import OnlineModal from './Online_Model';
import PersonModal from './Person_Modal';

function ModalBody(props) {

    switch (props.data.Task_type) {
        case 'Person':
            // person
            return (
                <div>
                    <PersonModal data={props.data} />
                </div>
            );
        case 'Online':
            // online 
            return (
                <div>
                    <OnlineModal data={props.data} />
                </div>
            );
        default:
            // return default
            return (
                <div></div>
            );
    }
}

export default ModalBody;