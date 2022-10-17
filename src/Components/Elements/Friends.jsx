import React from "react";

const Friends = () => {
  return (
    <div className="friend-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 mt-5">
            <h1>Friends of Povo</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <a href="#">
              <img className="w-75" src="./Assists/10010.png" alt="" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#">
              <img className="w-75" src="./Assists/10011.svg" alt="" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#">
              <img className="w-75" src="./Assists/10012.png" alt="" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#">
              <img className="w-75" src="./Assists/10013.png" alt="" />
            </a>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <a href="#"><img className="w-100" src="./Assists/10014.png" alt="" /></a>
            </div>
            <div className="col-md-6">
            <a href="#"><img className="w-100" src="./Assists/10015.png" alt="" /></a>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-4 mb-5">
                <a href="#"><img src="./Assists/10016.png" className="w-100" alt="" /></a>
            </div>
            <div className="col-md-4">
                <a href="#"><img src="./Assists/10017.png" className="w-100" alt="" /></a>
            </div>
            <div className="col-md-4">
                <a href="#"><img src="./Assists/10018.png" className="w-100" alt="" /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
