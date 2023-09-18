import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var {
      mClass,
      nClass,
      cClass,
      slogo,
      // hbtnClass,
    } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
                <img
                  src={require("../img/home_isif.png")}
                  alt=""
                  style={{
                    width: "163px",
                  }}
                />
                <img
                  src={require("../img/home_isif.png")}
                  alt="logo"
                  style={{
                    width: "163px",
                  }}
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link" title="home">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Media Coverage
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/PageNewsList"
                        >
                          News
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/11YZpbDYR5Fx867g94Lo2WL-Dl661__wE/view"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          Press Release 2022
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="download"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      List of Winner
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://docs.google.com/spreadsheets/d/1O-JC8bqxfCf_VdDyyaOWaLJbuYQAdNzHEgD9qU-nnB4/edit?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          List of Winner 2022
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://docs.google.com/spreadsheets/d/1No84fcdck3gWNLIP3374EyAE9op2OGJz_8oskTkC38M/edit#gid=0"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          List of Winner 2021
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://docs.google.com/spreadsheets/d/1X1brvUOx5QcAO9_mT7dTmqEBRrgSKmXn/edit#gid=1957635472"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          List of Winner 2020
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="download"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Curation
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1znfA6pHSrF3qbg7gWzXxulM2666EAK-u?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2022
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1w4rtwE0M7rn8e3hqaveB4njlw4KmKJfE?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2021
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/15ZIgSohXPRl7O7zrqyDR4oCurHq-AeR_?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2020
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="download"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Certificate
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1cAVrGoPw5WI-VhIREswrMP_l7_w5zpX1?usp=share_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          Certificate Supervisor
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="download"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Galery
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/11CHleI2R5Y5-oxZ0b8p5CIZAMvc8SXl0"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Galery 2022
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1g-dfsRAEqqLAVmeO3uIxtUyjE8C0UB_s"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Galery 2021
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/u/2/folders/1LbbxZ5RBX3BC1qLgzwGNVczIWjIGiaXq"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Galery 2020
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1HbPL_lBUi4B2Z5p1PRyirqZ1imp8BaNt"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="nav-link"
                        >
                          Galery 2019
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      title="Service"
                      className="nav-link"
                      to="/Faq"
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      title="Winner"
                      className="nav-link"
                      target="-blank"
                      href="https://drive.google.com/file/d/1xtyOBFyD8cHtdTPSPfZfgWGj8DZ2r3H7/view?usp=share_link"
                    >
                      Guide Book
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink title="Contac" className="nav-link" to="/Contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
