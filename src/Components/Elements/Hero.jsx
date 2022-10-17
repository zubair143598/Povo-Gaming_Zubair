import React, { useState } from "react";
import { AiOutlineMedium } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { BsReddit } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              PLAY TO WIN <br /> REWARD ON HOLDING
            </h1>
            <div className="col-md-10 ">
            <h3 className="mt-5 p-2 fs-3">
              Frictionless yield & liquidity generation protocol for game lover.
              Povo is deflationary in it's nature
            </h3>
            </div>
            <button className="btn  mt-5 btn-light border-dark  ">
              <img
                src="./Assists/pancakeswap-cake-logo.png"
                className=" cakeImg"
                alt=""
              />
              <p className="fw-bolder ">Trade on pancakeswap</p>
            </button>
            <button className="btn fs-5 btn2 mt-5 btn-light border-dark  ">
              Whitepaper
            </button>
            <p className="mt-5">
              <AiOutlineMedium size={30} />
              <AiFillGithub className="m-2" size={30} />
              <BsTelegram className="m-2" size={30} />
              <FaTwitter className="m-2" size={30} />
              <GrYoutube className="m-2" size={30} />
              <BsReddit className="m-2" size={30} />
              <BsFacebook className="m-2" size={30} />
            </p>
            <br />
            <div className="col-md-6 mt-5 sdsfd">
              <h5>Buy FEE in 10%</h5>
              <ul className="">
                <li>3% to buy back funds</li>
                <li>1% Marketing and Development</li>
                <li>1% Reflection to holders</li>
              </ul>
            </div>
            <div className="col-md-5 sdsfd">
              <h5>Selling FEE in 7%</h5>
              <li>4% to buy back funds</li>
              <li>1% Marketing and Development</li>
              <li>2% Reflection to holders</li>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col-md-4 d-flex  slider">
            <div className="col-md-6"></div>
              <Carousel  activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-60 border sliderImg"
                    src="./Assists/NFT1.d7c5ef8c.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-60 border sliderImg"
                    src="./Assists/NFT2.ce0d0563.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-60 border sliderImg"
                    src="./Assists/NFT3.f7c6e745.png"
                    alt="Third slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            {/* <div className="col-md-6"></div> */}
            <div className="col-md-12  text-center mt-5">
              <span className="border col-6 bg-danger p-2 px-4">Token address</span>
              <p className="border col-6 p-2 px-4 ">
                0x2a2d03a47ae62203
              </p>
                </div>
              <div className="col-md-12 col-12">
                <img
                  className="tokenImg mx-2"
                  src="./Assists/certik.png"
                  alt=""
                />
                <img className="tokenImg mx-5" src="./Assists/pcs.png" alt="" />
                <img className="tokenImg mx-2" src="./Assists/xt.png" alt="" />
              </div>
          </div>
        </div>
        <div className="row text-center ">
          <div className="col-md-6">
            <img src="./Assists/yahoo.png" className="imgwd" alt="" />
          
          </div>
          <div className="col-md-6">
            <img src="./Assists/benzinga.png " className="imgwd mb-5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


