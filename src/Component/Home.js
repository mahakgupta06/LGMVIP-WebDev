import React from "react";
import "../App.css";
import "animate.css";
import image1 from "../images/react.svg";

const Main = () => {
  return (
    <div className="welcome container">
      <div className="row pb-4">
        <div className="col-lg-6 col-12">
          <div className="text-center para pt-4">
            <h4 className="py-2 fw-bold text-white text-justify">
              Welcome to Lets Grow More TASK-2
            </h4>
            <p className="text-white text-justify">
            Created by MAHAK GUPTA :) | All rights reserved!
      
            
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="text-center">
            <img
              src={image1}
              className="img-fluid logo-class"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
