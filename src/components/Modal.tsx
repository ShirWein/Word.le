import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

export default function ModalPop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button className= 'navbar-toggler' onClick={handleShow}>
            i
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
        >
            <Modal.Header closeButton>
            <Modal.Title className='justify-content-center'>How to play?</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center text-lg'>
            Guess the word in 6 tries. 
            After each guess, the color of the tiles will change to show how close your guess was to the word.
            <br/>
            <div className='img-green'>
                <img src="green.png"/>
            </div>
            The letter W is in the word and in the correct spot.
            <br/>
            <div className='img-yellow'>
                <img src="yellow.jpg"/>
            </div>
            The letter L is in the word but in the wrong spot.
            <br/>
            <div className='img-gray'>
                <img src="gray.jpg"/>
            </div>
            The letter U is not in the word in any spot.
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <b>©️ Shir Weinbrand | 2022-2023</b>
            </Modal.Footer>
        </Modal>
    </>
  );
}

