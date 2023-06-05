import React, { useState } from 'react'
import Modal from '../components/Modal.js'
import Button from '../components/Button.js'

function ModalPage() {

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const action = <div>
        <Button onClick={handleClose} primary rounded>Close Modal</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={action}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary rounded>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage