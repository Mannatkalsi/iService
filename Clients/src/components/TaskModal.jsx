import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModelBody from './ModalBody';


function TaskModal(props) {
    //console.log(JSON.stringify(props))
    if (typeof props.data === 'undefined') return <div></div> // return empty div if data not set

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title><b>Task Details:</b></Modal.Title>
            </Modal.Header>
            < div className="modal-list">
                 <div>
                     <ModelBody data={props.data[0]} />
                </div>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </div >
        </Modal>
    )
}

export default TaskModal