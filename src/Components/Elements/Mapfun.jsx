import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Mapfun = () => {
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
      title: "Cross chain interpretability & custom wallet",
      text: `molestiae natus adipisci modi eligendi? Debitis amet quae unde
      commodi aspernatur enim, consectetur. Cumque deleniti
      temporibus ipsam atque a dolores`,
    },
    {
      img: "./Assists/10012.png",
      title: 3,
      text: "Saqib",
    },
  ];
  // console.log(JSON.stringify(data));
  return (
    <>
    <React.Fragment>
      <div className="bg-black">
        <div className="container">
          <div className="row align-items-stretch">
            {/* {data.map((v,i)=>{
            return <>
            <div className="col-md-4" key={i}>
                <div className="card text-dark h-100">
                    <div className="card-body">
                        <h1>{v.id}</h1>
                        <h1>{v.name}</h1>
                        <img src={v.img} className="w-50" alt="" />
                    </div>
                </div>
            </div>
            </>
        })} */}
            {data1.map((v, i) => {
              return (
                <>
                  <div className="col-md-4 text-center ">
                    <div
                      className="card mb-3 border-0 mt-5 bg-light"
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
                            {v.text.slice(0, 100)}
                        </p>
                        <button onClick={() => handleShow(v.title, v.text)}>Read More</button>
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

export default Mapfun;
