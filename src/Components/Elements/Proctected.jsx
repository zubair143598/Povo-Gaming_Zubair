import React from "react";

const Proctected = () => {
  return (
    <div className="protected-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 text-center">
            <h1>
              How <span className="text-danger">Povo</span> is Rugpul protected
            </h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 mt-5">
            <ul className="mt-5 fw-bolder">
              <li>
                Povo Presale is going held on UniCrypt which prevents rug-pull
                by offering auto liquidity lock functionality
              </li>
              <li>
                60% of raised funds in presale is locked into liquidity by
                UniCrypt for 266 years
              </li>
              <li>Transaction fee is never above 7% max.</li>
              <li>
                Newly created LP tokens are locked in order to ensure
                transparency.
              </li>
              <li>Smart Contract is audited by CertTik.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="w-100" src="./Assists/10004.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proctected;
