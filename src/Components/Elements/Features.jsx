import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Features = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [data, setData] = useState({
  title:'',
  text:''
})

const obj=[
  {
    img:'1',
    test:'1.1',
    psara: '1.2',

  },
  {
    img:'2',
    test:'2.1',
    psara: '2.2',

  },
  {
    img:'',
    test:'',
    psara: '',

  },{
    img:'',
    test:'',
    psara: '',

  },
]
  return (

    <>
    
   
    <React.Fragment>
    <div className="feature-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 mt-5"><h1>Povo Features</h1></div>
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
                <p className="card-text fw-bolder text-muted pb-3">
                In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games
                </p>
                <div className="col text-end">
                 <button className="btn text-warning fw-bolder fs-5" onClick={()=>{
                    setData({
                      title:'In-game items crafting',
                      text:'In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons.'
                    })
                    handleShow()
                 }}>
                  Read more
                 </button>
                </div>

               
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
                  <button 
                  className="btn text-warning fw-bolder fs-5"
                  onClick={()=>{
                    setData({
                      title:'Cross-chain interoperability and custom wallets',
                      text:'DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable.'
                    })
                    handleShow()
                  }}
                  >Read more</button>
                </div>

                
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
                  src="./Assists/10009.png"
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
                  <button
                  className="btn text-warning fw-bolder fs-5"

                  onClick={()=>{
                    setData({
                      title:"Multiverse gaming",
                      text:"The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games"
                    })
                    handleShow()
                  }}
                  >Read more</button>
                </div>

                
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
                  <button
                  className="btn text-warning fw-bolder fs-5"
                  onClick={()=>{
                    setData({
                      title:'Tokenize character items',
                      text:'Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.'
                    })
                   handleShow()
                  }}
                  >Read sdmore</button>
                </div>


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
                <button
                  className="btn text-warning fw-bolder fs-5"
                  onClick={()=>
                  {
                    setData({
                      title:'Gamer/devs can introduce their own token',
                      text:'Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.'
                    })
                    handleShow()
                  }}
                  >Read more</button>
                </div>


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
                <button
                  className="btn text-warning fw-bolder fs-5"
                  onClick={()=>
                  {
                    setData({
                      title:'Dapp Store and game studio integration',
                      text:'Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.'
                    })
                    handleShow()
                  }}
                  >Read more</button>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default Features;
