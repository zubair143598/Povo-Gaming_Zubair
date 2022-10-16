import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Features = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="feature-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4  ">
            <div
              className="card mb-3 border-0 mt-5 bg-light"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <img
                  src="https://uploads-ssl.webflow.com/60c7783699e1051d74062f79/60c92caf0644a6350eba414b_1.svg"
                  className="card-img-top  cardImg"
                  alt="..."
                />
                <h4 className="card-subtitle fw-bolder mb-2 text-danger">
                  In-Game item <br /> grafting
                </h4>
                <p className="card-text fw-bolder text-black pb-3">
                In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games
                </p>
                <div className="col text-end">
                  <Button
                    className="bg-transparent text-danger"
                    style={{ border: "none", borderBottom: "2px solid black" }}
                    onClick={() => setShow(true)}
                  >
                    read more
                  </Button>
                </div>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-50w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                    
                  <Modal.Body>
                    <p className="text-black">
                    In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons.
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>

          <div className="col-md-4  ">
            <div
              className="card mb-3 border-0 mt-5 bg-danger"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <img
                  src="./Assists/feature2.png"
                  className="card-img-top pic2 cardImg"
                  alt="..."
                />
                <h4 className="card-subtitle mb-2 ">
                  Cross chain interpretability & custom wallet
                </h4>
                <p className="card-text  pb-3">
                  molestiae natus adipisci modi eligendi? Debitis amet quae unde
                  commodi aspernatur enim, consectetur. Cumque deleniti
                  temporibus ipsam atque a dolores
                </p>
                <div className="col text-end">
                  <Button
                    className="bg-transparent text-warning"
                    style={{ border: "none", borderBottom: "2px solid black" }}
                    onClick={() => setShow(true)}
                  >
                    read more
                  </Button>
                </div>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-50w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Body>
                    <p className="text-black">
                    In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons.
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>

          <div className="col-md-4  ">
            <div
              className="card mb-3 border-0 mt-5 bg-light"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <img
                  src="https://povo-site.netlify.app/static/media/h3.c5f8acdf.png"
                  className="card-img-top pic3 cardImg"
                  alt="..."
                />
                <h4 className="card-subtitle mb-2 text-warning">
                  multiverse <br />
                  Gaming
                </h4>
                <p className="card-text text-black pb-3">
                  molestiae natus adipisci modi eligendi? Debitis amet quae unde
                  commodi aspernatur enim, consectetur. Cumque deleniti
                  temporibus ipsam atque a dolores
                </p>
                <div className="col text-end">
                  <Button
                    className="bg-transparent text-danger"
                    style={{ border: "none", borderBottom: "2px solid black" }}
                    onClick={() => setShow(true)}
                  >
                    read more
                  </Button>
                </div>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-50w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Body>
                    <p className="text-black">
                    In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons.
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>

          <div className="col-md-4  ">
            <div
              className="card mb-3 border-0 mt-5 bg-danger"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <img
                  src="./Assists/f4.png"
                  className="card-img-top  cardImg"
                  alt="..."
                />
                <h4 className="card-subtitle mb-2 ">
                  Tokenize character <br />
                  item
                </h4>
                <p className="card-text  pb-3">
                  Povo is one of those games that have tokenized their
                  characters. Meaning that, you can now advance your levels
                  within the game
                </p>
                <div className="col text-end">
                  <Button
                    className="bg-transparent text-warning"
                    style={{ border: "none", borderBottom: "2px solid black" }}
                    onClick={() => setShow(true)}
                  >
                    read more
                  </Button>
                </div>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-50w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Body>
                    <p className="text-black">
                      Povo is one of those games that have tokenized their
                      characters. Meaning that, you can now advance your levels
                      within the game doloribus debitis! Sit quasi quod
                      accusamus eos quod. Ab quos consequuntur eaque quo rem!
                      Mollitia reiciendis porro quo magni incidunt dolore amet
                      atque facilis ipsum deleniti rem!
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>

          <div className="col-md-4  ">
            <div
              className="card mb-3 border-0 mt-5 bg-light"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <img
                  src="./Assists/f5.svg"
                  className="card-img-top  cardImg"
                  alt="..."
                />
                <h4 className="card-subtitle mb-2 text-warning">
                  Gamer/devs can introduce their own token
                </h4>
                <p className="card-text text-black pb-3">
                  Blockchain has revolutionized the world of gaming. It allows
                  the projection of value in intangible assets. It helps gamers
                  to securely
                </p>
                <div className="col text-end">
                  <Button
                    className="bg-transparent text-danger"
                    style={{ border: "none", borderBottom: "2px solid black" }}
                    onClick={() => setShow(true)}
                  >
                    read more
                  </Button>
                </div>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-50w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Body>
                    <p className="text-black">
                      Ipsum molestiae natus adipisci modi eligendi? Debitis amet
                      quae unde commodi aspernatur enim, consectetur. Cumque
                      deleniti temporibus ipsam atque a dolores quisquam
                      quisquam adipisci possimus laboriosam. Quibusdam facilis
                      doloribus debitis! Sit quasi quod accusamus eos quod. Ab
                      quos consequuntur eaque quo rem! Mollitia reiciendis porro
                      quo magni incidunt dolore amet atque facilis ipsum
                      deleniti rem!
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5 ">
            <div
              className="card mb-3 border-0 mt-5 bg-danger"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <img
                  src="./Assists/f6.png"
                  className="card-img-top  cardImg"
                  alt="..."
                />
                <h4 className="card-subtitle mb-2 ">
                  CDapp Store and game studio integration
                </h4>
                <p className="card-text  pb-3">
                Decentralized applications are a set of programs that harness excess power from different nodes globally dsaf.
                </p>
                <div className="col text-end">
                  <Button
                    className="bg-transparent text-warning"
                    style={{ border: "none", borderBottom: "2px solid black" }}
                    onClick={() => setShow(true)}
                  >
                    read more
                  </Button>
                </div>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-50w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Body>
                    <p className="text-black">
                      Ipsum molestiae natus adipisci modi eligendi? Debitis amet
                      quae unde commodi aspernatur enim, consectetur. Cumque
                      deleniti temporibus ipsam atque a dolores quisquam
                      quisquam adipisci possimus laboriosam. Quibusdam facilis
                      doloribus debitis! Sit quasi quod accusamus eos quod. Ab
                      quos consequuntur eaque quo rem! Mollitia reiciendis porro
                      quo magni incidunt dolore amet atque facilis ipsum
                      deleniti rem!
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
