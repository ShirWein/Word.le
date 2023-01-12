import React from "react";
import ModalPop from "./Modal";

export function Navbar () {

  return (

    <>

    <nav className="navbar fixed-top" style={{backgroundColor: '#E0F6EE'}}>
          <span className="username" style={{marginLeft: "80px", top: "40%", position: "absolute", fontSize: "1rem"}}>
            <strong>Hello userName</strong>
          </span>
        
        <div className="container-fluid d-flex justify-content-between">
          <ModalPop/>
          <a className="navbar-brand fs-2" style={{marginLeft: "22px"}} href="#"><strong>🆆🤓🆁 🅳 🅻 🅴</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">WOOORDLE</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active"  href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
  </>
  )
}