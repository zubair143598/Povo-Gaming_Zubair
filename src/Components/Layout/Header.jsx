import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar header   navbar-expand-lg ">
    <div className="container">
      <a className=" nav-link active" aria-current="page" href="#">
        <img src="./Assists/NewLogo.png  " alt="" className="logo p-1 rounded  border" />
      </a>

      <button
        className=" color bg-light navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fw-bolder clr" aria-current="page" to="Home">
            Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link clr fw-bolder" to="OurTeam">
            Staking
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bolder clr" to="Swap">
            Governance
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bolder clr" href="#">
            Tokenomics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bolder clr" href="#">
              Roadmap
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bolder clr" href="#">
            Rogpol
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-bolder clr" href="#">
            FAQs
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-bolder bg-danger rounded clr" href="#">
            connect wallet
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header