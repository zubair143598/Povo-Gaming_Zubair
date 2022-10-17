import React from 'react';
import { AiOutlineMedium } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { BsReddit } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-2 col-6 asd">
              <img src="./Assists/NewLogo.png" className='w-100 img1 ' alt="" />
            </div>
            <div className="col-md-6 col-6 asd">
              <p className='asd mt-5 fw-bolder'>
                PLAY TO WIN REWARD ON HOLDING</p>
              <p>Frictionless yield & liquidity generation protocol
for game lover. Povo is deflationary in it's nature</p>
            </div>
            {/* <div className="col-md-6 "><p>asd</p></div> */}
            
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5"><p className="mt-5">
              <AiOutlineMedium size={30} />
              <AiFillGithub className="m-2" size={30} />
              <BsTelegram className="m-2" size={30} />
              <FaTwitter className="m-2" size={30} />
              <GrYoutube className="m-2" size={30} />
              <BsReddit className="m-2" size={30} />
              <BsFacebook className="m-2" size={30} />
            </p></div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12 text-center"><p>©2021 Povo Productions Limited</p></div>
        </div>
      </div>
    </div>
  )
}

export default Footer