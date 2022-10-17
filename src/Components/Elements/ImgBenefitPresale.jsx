import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const ImgBenefitPresale = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    title: "",
    text: "",
  });

  return (
    <div className="imgBenefitPresale-section">
      <div className="img-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <img src="./Assists/10003.png" className="w-100 my-5" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="benefit-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mt-5">Benefit of povo</h1>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bolder mt-5 ">Anyone Who Owns Gaming Assets</h5>
              <ul className="mt-5">
                <li className="mt-2 fw-bolder">
                  Transfer items to another account
                </li>
                <li className="mt-2 fw-bolder">
                  Renders the items to mount reserve values
                </li>
                <li className="mt-2 fw-bolder">
                  Ease of using the items accross other supported games
                </li>
              </ul>
              <h5 className="fw-bolder mt-4">
                Game tournament and receive winnings in your wallet
              </h5>
              <h5 className="fw-bolder mt-4">
                Artificial Intelligence improve players expericne
              </h5>
              <h5 className="fw-bolder mt-4">Withdraw funds using PayPal</h5>
            </div>
            <div className="col-md-6">
              <img src="./Assists/10008.png" className="w-100 mb-5" alt="" />
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <div className="presale-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mt-5">
                <h1>
                  Platforms going <span style={{ color: "darkred" }}>Live</span>{" "}
                  after PreSale
                </h1>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-md-4 ">
                <h2 className="fw-bolder ">Fractionless field</h2>
                <button
                  className="btn text-danger bg-white mb-5 fw-bolder fs-5"
                  onClick={() => {
                    setData({
                      title: "Governance in gaming",
                      text: "The nature of governance in the gaming community is somewhat, centralized governance structure. The founders of each gaming clan are mostly it’s leaders too. These include, the administrators of the system, the owners of the server, the savvy programmers are the only ones in most cases to participate in the important decision making of the platform. These fast paced gaming structure requires a central leadershipfor its in-game operations. However, the governance of gaming extends far than the in-game structure. The leadership is much more democratic outside the gaming platform, where they organize and participate in discussion and suggestion platforms.",
                    });
                    handleShow();
                  }}
                >
                  Read More
                </button>
              </div>
              <div className="col-md-4 ">
                <h2 className="fw-bolder">Governance in gaming</h2>
                <button
                  className="btn mt-3 text-danger bg-white mb-5 fw-bolder fs-5"
                  onClick={() => {
                    setData({
                      title: "Governance in gaming",
                      text: "The nature of governance in the gaming community is somewhat, centralized governance structure. The founders of each gaming clan are mostly it’s leaders too. These include, the administrators of the system, the owners of the server, the savvy programmers are the only ones in most cases to participate in the important decision making of the platform. These fast paced gaming structure requires a central leadershipfor its in-game operations. However, the governance of gaming extends far than the in-game structure. The leadership is much more democratic outside the gaming platform, where they organize and participate in discussion and suggestion platforms.",
                    });
                    handleShow();
                  }}
                >
                  Read More
                </button>
              </div>
              <div className="col-md-4 ">
                <h2 className="fw-bolder">Staking in gaming</h2>
                <button
                  className="btn text-danger bg-white mb-5 fw-bolder fs-5"
                  onClick={() => {
                    setData({
                      title: "Staking in gaming",
                      text: "The integration of DeFi in the online gaming community is the hidden gem to generate passive income. The two communities have joined to give birth to their brainchild, ‘cryptocurrency gaming’. The concept works as follow, there are a number of games available online, which incorporate blockchain technology. Gamer enthusiasts around the globe play to earn. The players in these games earn rewards in form of cryptocurrencies. The users than use their tokens to earn reward through staking them. This works on the concept of proof of stake. These gamers also earn governance tokens to participate in important decision making of the platform.",
                    });
                    handleShow();
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{data.text}</Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default ImgBenefitPresale;
