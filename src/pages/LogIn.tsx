import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function LogIn() {
  //* Modal Log In:
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    // handleSubmit();
    // //@ts-ignore
    // setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };
  const handleShow = () => setShow(true);

  //* Handle submit & local storage:
  //* User Name state:
  const [username, setUsername] = useState("");
   //* User password state:
  const [password, setPassword] = useState("");

  //* Grab data from local storage:
  useEffect(() => {
    const data = window.localStorage.getItem('User_Details');
    console.log('data', data);
  }, [])

  //* Store data in local storage:
//   useEffect(()=> {
//     window.localStorage.setItem('User_Details', JSON.stringify(
//         {"user": username, 
//         "password": password}))
//   }, [username])
  const [user, setUser] = useState()
  const handleSubmit = (e: any): any => {
    e.preventDefault();
    // let status = false;
    //   useEffect(()=> {
    // window.localStorage.setItem('User_Details', JSON.stringify(
    //     {"user": username, 
    //     "password": password}))
    // }, [username])
    // // const user = { username, password };
    // // window.localStorage.setItem('User_Details', JSON.stringify(user));
    // // setUser(data);
    // // console.log(data)
    // //send the username and password to the server
    // // const response = await axios.post(
    // //   "http://blogservice.herokuapp.com/api/login",
    // //   user);
    // // set the state of the user
    // // setUser(response.data)
    // // store the user in localStorage
    // // localStorage.setItem('user', response.data)
    // // console.log(response.data)
    // if (status){
    //     location.href="/game.html";
    //   }
  };

//   if (user) {
//     return <div>{user.name} is loggged in</div>;
//   }

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
                value={username}
                autoFocus
                onChange={({ target }) => setUsername(target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Password</Form.Label>
              <Form.Control type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)} 
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
            }} onClick={handleClose}
            type = "submit">
            Log In
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