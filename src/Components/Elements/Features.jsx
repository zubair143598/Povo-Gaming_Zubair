import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Features = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (tit, txt) => {
    setData({title: tit, text: txt})
    setShow(true)
  };
const [data, setData] = useState({
  title:'',
  text:''
})
  const data1 = [
    {
      img: "https://uploads-ssl.webflow.com/60c7783699e1051d74062f79/60c92caf0644a6350eba414b_1.svg",
      title: "In-Game item grafting",
      text: `In-game items crafting is a skill or set of skills option
        specifically provides in massively multiplayer online games
      or role playing games In-game items crafting is a skill or set of skills option
      specifically provides in massively multiplayer online games
    or role playing gamesIn-game items crafting is a skill or set of skills option
    specifically provides in massively multiplayer online games
  or role playing games`,
    },

    {
      img: "./Assists/feature2.png",
      title: "Cross-chain interoperability and custom wallets",
      text: `DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable.`,
    },
    {
      img: "./Assists/10009.png",
      title: `Multiverse gaming`,
      text: "The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games",
    },

    {
        img: "./Assists/f4.png",
        title: `Tokenize character items`,
        text: "Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.",
      },

      {
        img: "../Assists/f5.svg",
        title: `Gamer/devs can introduce their own token`,
        text: "Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.",
      },

      {
        img: "./Assists/f6.png",
        title: `Dapp Store and game studio integration`,
        text: "Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.",
      },
  ];
  return (

    <>
    <React.Fragment>
      <div className="bg-black">
        <div className="container">
          <div className="row align-items-stretch">
            
            {data1.map((v, i) => {
              return (
                <>
                  <div className="col-md-4  text-center ">
                    <div
                      className="card mb-3  border-0 mt-5 bg-light"
                      style={{ width: "100%" }}
                    >
                      <div className="card-body ">
                        <img
                          src={v.img}
                          className="card-img-top w-50  cardImg"
                          alt="..."
                        />
                        <h4 className="card-subtitle fw-bolder mb-2 text-danger">{v.title}</h4>
                        <p className="card-text text-start fw-bolder text-muted pb-3">
                            {v.text.slice(0, 135)}
                        </p>
                        <div className="text-end">
                        <button onClick={() => handleShow(v.title, v.text)}>Read More</button>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                  
                </>
                
              );
            })}
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
