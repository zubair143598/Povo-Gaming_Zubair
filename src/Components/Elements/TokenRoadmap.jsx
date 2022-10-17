import React from "react";

export const TokenRoadmap = () => {
  return (
    <div className="tokenRoadmap-section">
      <div className="token-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 text-center">
              <h1 className="text-danger mt-5">
                <span className="text-white">Povo</span> Tokenomics
              </h1>
            </div>
            <div className="col-md-6">
              <h5 className="mt-4">
                <strong>TOTAL SUPPLY: </strong>10,000,000
              </h5>
              <h2>
                Token <strong>Distribution</strong> (Gamenomics)
              </h2>
              <ul>
                <li>
                  <span
                    style={{
                      backgroundColor: "rgb(23, 108, 165)",
                      padding: "0px 80px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Presale
                  </span>{" "}
                  30%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(255, 193, 7)",
                      padding: "0px 45px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Staking pool
                  </span>{" "}
                  23%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(91, 63, 144)",
                      padding: "0px 30px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Liquidity Pool
                  </span>
                  20%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(200, 30, 80)",
                      padding: "0px 10px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Advisors
                  </span>
                  10%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(235, 56, 116)",
                      padding: "0px 10px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Airdop
                  </span>
                  7%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(47, 172, 206)",
                      padding: "0px 4px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Gaming
                  </span>{" "}
                  7%
                </li>
                <li contentEditable="false">
                  <span
                    style={{
                      backgroundColor: "rgb(245, 140, 139)",
                      padding: "0px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Team
                  </span>{" "}
                  3%
                </li>
              </ul>
            </div>

            <div className="col-md-6">
                <img className="w-100 my-5" src="./Assists/10007.png" alt="" />
            </div>

          </div>
        </div>
      </div>
      <div className="roadmap-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5">
                    <img className="w-100" src="https://povo-site.netlify.app/static/media/roadmap.bc226a8d.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
