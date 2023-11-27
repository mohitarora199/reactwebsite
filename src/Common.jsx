import React from "react";
import { Link } from "react-router-dom";

export const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 ps-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.name}<strong className="brand-name"> Mohit Technical</strong></h1>
               <h2 className="my-3">
                We are the team of talented developer making websites
               </h2>
               <div className="my-3">
                <Link to={props.visit} className="btn-get-started">{props.btnname}</Link>
               </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                   <img src="logo192.png" className="img-fluid animated" alt="Common img"/> 
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
