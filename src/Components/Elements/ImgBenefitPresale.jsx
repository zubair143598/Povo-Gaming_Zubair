import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from 'react'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
    className="bg-transparent"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-black" >
        <Modal.Title className="bg-black" id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-black">
        <h4>Centered Modal</h4>
        <p className="bg-black">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}
const ImgBenefitPresale = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
              <img
                src="https://povo-site.netlify.app/static/media/benefit.568264db.png"
                className="w-100 mb-5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
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
              <h2>Fractionless field</h2>
              <Button className="w-30 fw-bolder bg-light text-danger mt-3" variant="primary" onClick={() => setModalShow(true)}>
                Read more
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="col-md-4 ">
              <h2>Fractionless field</h2>
              <Button className="w-30 fw-bolder bg-light text-danger mt-3" variant="primary" onClick={() => setModalShow(true)}>
                Read more
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="col-md-4 ">
              <h2>Fractionless field</h2>
              <Button className="w-30 btn mb-5 fw-bolder bg-light text-danger mt-3" variant="primary" onClick={() => setModalShow(true)}>
                Read more
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgBenefitPresale;
