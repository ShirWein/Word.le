import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface IFormInputValues {
    name: string;
    password: number | string;
}

function getFormValues() {
    const storedValues = localStorage.getItem('FormData');
    if (!storedValues) return {
        name: "Guest",
        password: "",
    };
    return JSON.parse(storedValues);
}


export default function LogIn() {
    const [values, setValues] = React.useState<IFormInputValues> (getFormValues);

    useEffect(()=> {
        localStorage.setItem('FormData', JSON.stringify(values));
    }, [values]);

    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValues((previousValues) => ({
            ...previousValues, 
            [event.target.name] : event.target.value,
        }));
    }

  //* Modal Log In:
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='play play2' style={{
        width: "143px",
        height: "60px",
        marginTop: "8px",
        background: "orange", 
        marginLeft: "180px", 
        border: "2px solid black",
        boxShadow: "0px 0px 2px 2px rgb(0,0,0)", 
        borderRadius: "4px black",
        textAlign: "center",
        justifyContent: "center",
        color: "black",
        textDecoration: "none",
        fontSize: "25px",
        }} onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="logInName" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    autoFocus
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Password</Form.Label>
                <Form.Control 
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange} 
                />
                </Form.Group>
            </Form>
        </Modal.Body>
          
            
            <Modal.Footer className='justify-content-center'>
                <Button style={{
                    width: "83px",
                    height: "60px",
                    marginTop: "8px",
                    background: "gray",
                    border: "1px solid black",
                    color: "black",
                    }} onClick={handleClose}>
                    Close
                </Button>
                <Button style = {{
                    width: "83px",
                    height: "60px",
                    marginTop: "8px",
                    background: "orange",
                    border: "1px solid black",
                    color: "black",
                    }} 
                    onClick={handleClose}
                    type = "submit">
                    <a style={{color: "black", textDecoration: "none"}} href={'game'} >Log In</a>
                </Button>
            </Modal.Footer>
      </Modal>
    </>
  );
}












// import react, {useState} from 'react';
// import {Modal, Button} from 'react-bootstrap';

// export function LogIn () {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//   return (
//     <>
//         <Button className= 'navbar-toggler' onClick={handleShow}>
//             Log In
//         </Button>

//         <Modal
//             show={show}
//             onHide={handleClose}
//             backdrop="static"
//             keyboard={true}
//         >
    
//             <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header text-center">
//                             <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body mx-3">
//                             <div className="md-form mb-5">
//                                 <i className="fas fa-envelope prefix grey-text"></i>
//                                 <input type="email" id="defaultForm-email" className="form-control validate"/>
//                                 <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
//                             </div>

//                             <div className="md-form mb-4">
//                                 <i className="fas fa-lock prefix grey-text"></i>
//                                 <input type="password" id="defaultForm-pass" className="form-control validate"/>
//                                 <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
//                             </div>

//                         </div>
//                         <div className="modal-footer d-flex justify-content-center">
//                             <button className="btn btn-default">Login</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="text-center">
//                 <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch
//                     Modal Login Form</a>
//             </div>
//         </Modal>
//     </>
//     )
// }  