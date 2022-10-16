import React from "react";

const Plateform = () => {
  return (
    <div className="plateform-section">
      <div className="container">
        {/* <br /><br /><br /> */}
        <div className="row">
          <div className="col-md-6">
            <img src="./Assists/Laptop.png" className="w-100 " alt="" />
          </div>
          <div className="col-md-6 ">
            <h2 className="text-white  fw-bolder ">
              {" "}
              <span className="text-danger   mx-3">Povo</span>
              Stacking Platform
            </h2>
            <div className="col-md-8 text-center">
              <button className="btn btn-danger p-2 fs-5">
                Lunch, Povo Staking
              </button>
            </div>
            <div className="col-md-10">
              <p className="fw-bolder">key frame</p>
              <ul>
                <li>
                  You can stake your POVO at any time you choose. You can stake
                  any amount of POVO you wish.
                </li>
                <li>
                  Once staked, the contract will deliver a reward continuously
                  for as long as tokens remain staked.
                </li>
                <li>
                  You can withdraw any amount of staked POVO tokens without any
                  locking period
                </li>
                <li>You are free to stake additional amounts at any time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plateform;
