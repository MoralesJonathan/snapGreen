import React, {useState} from 'react';

function EventModal(props){
    const [showModal, setShowModal] = useState(true);
    return(
        <React.Fragment>
        <Modal show={showModal} onHide={setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
        </React.Fragment>
    )
}

export default EventModal;