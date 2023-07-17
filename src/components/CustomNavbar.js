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
                      News
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/1WolMNh6iU3n_9soQZZepuRG0T6O4gqi2/view?usp=share_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          Press Release 2022
                        </a>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          title="Contac"
                          className="nav-link"
                          to="/Contact"
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service"
                          className="nav-link"
                          to="/About"
                        >
                          About
                        </NavLink>
                      </li>
                      {/* <li className="nav-item">
                        <NavLink exact title="Service" className="nav-link" to="/Faq">
                          FAQ
                        </NavLink>
                      </li> */}
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/Process"
                        >
                          Process
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/bloglist"
                        >
                          News
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/bloglist"
                        >
                          Gallery
                        </NavLink>
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
                      {/* <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/1ilWuOn5-sOq2yY7S-vD5WyEc53S1RS4N/view?usp=sharing"
                          title="Guide Book"
                          className="nav-link"
                        >
                          Guide Book
                        </a>
                      </li> */}
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
                          href="https://docs.google.com/spreadsheets/d/1O-JC8bqxfCf_VdDyyaOWaLJbuYQAdNzHEgD9qU-nnB4/edit?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Press Release"
                          className="nav-link"
                        >
                          List of Winner 2022
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/198VNhMZs07cXrEuDiO3A9hOwCqd_d20X/view?usp=share_link"
                          title="Final Result"
                          className="nav-link"
                        >
                          Final Result
                        </a>
                      </li> */}
                      {/* <li className="nav-item">
                        <a
                          href="https://drive.google.com/drive/folders/1IC52IleDduUCMykdzUKdP7IFJVGUVuLk?usp=sharing"
                          title="Supervisor"
                          className="nav-link"
                        >
                          Supervisor
                        </a>
                      </li> */}
                    </ul>
                  </li>
                  {/* <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      News
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a
                          href="https://drive.google.com/file/d/1WolMNh6iU3n_9soQZZepuRG0T6O4gqi2/view?usp=share_link"
                          target="_blank"
                          rel='noreferrer noopener'
                          title="Press Release"
                          className="nav-link"
                        >
                          Press Release 2022
                        </a>
                      </li>
                    </ul>
                  </li> */}

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
                          href="https://drive.google.com/drive/folders/15ZIgSohXPRl7O7zrqyDR4oCurHq-AeR_?usp=drive_link"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2020
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
                          href="https://drive.google.com/drive/folders/1znfA6pHSrF3qbg7gWzXxulM2666EAK-u?usp=sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          title="Curation"
                          className="nav-link"
                        >
                          Curation 2022
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="dropdown submenu nav-item">
                    <Link
                      title="Gallery"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to="#"
                    >
                      Gallery
                    </Link>
                    <ul role="menu" className=" dropdown-menu"> */}
                  {/* <li className="nav-item">
                        <NavLink title="Portfolio 2" className="nav-link" to="/Portfolio-2col">
                          Portfolio 2col
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink title="Portfolio 3" className="nav-link" to="/Portfolio-3col">
                          Portfolio 3col
                        </NavLink>
                      </li> */}
                  {/* <li className="nav-item">
                        <NavLink title="Photo" className="nav-link" to="/GalleryF">
                          Photo
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink title="Video" className="nav-link" to="/gallery-video">
                          Video
                        </NavLink>
                      </li> */}
                  {/* <li className="nav-item">
                        <NavLink title="PortfolioSingle" className="nav-link" to="/PortfolioSingle">
                          Portfolio Single
                        </NavLink>
                      </li> */}
                  {/* </ul>
                  </li> */}
                  {/* <li className="dropdown submenu nav-item">
                    <Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">
                      NRTC 2021
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a href="https://forms.gle/ucc4MVJLb8mBVnfG8" title="Registration" className="nav-link">
                          Registration
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="https://drive.google.com/drive/folders/1dcpGi8hsvZ0g5DGg1U8ySKMMdNsQ2ypS?usp=sharing" title="Guide Book" className="nav-link">
                          Guide Book
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">
                      IRTC 2021
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <a href="http://bit.ly/Registration-Form-IRTC-2021" title="Registration" className="nav-link">
                          Registration
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="https://drive.google.com/drive/folders/1ZINuXYdAVO1Dp_o-t9roS8FRAiMDvkuW?usp=sharing" title="Guide Book" className="nav-link">
                          Guide Book
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="nav-item">
                    <NavLink title="Contac" className="nav-link" to="/.">
                      Curation
                    </NavLink>
                  </li> */}
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
                  {/* <li className="nav-item">
                      <a href="https://drive.google.com/drive/folders/1cAVrGoPw5WI-VhIREswrMP_l7_w5zpX1?usp=share_link" title="Certificate" className="nav-link">
                        Certificate
                      </a>
                      <ul>
                        <li>
                          <a href="https://drive.google.com/drive/folders/1cAVrGoPw5WI-VhIREswrMP_l7_w5zpX1?usp=share_link"></a>
                        </li>
                      </ul>
                    </li> */}
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
                      href="https://drive.google.com/file/d/1xtyOBFyD8cHtdTPSPfZfgWGj8DZ2r3H7/view?usp=share_link"
                    >
                      Guide Book
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      title="Winner"
                      className="nav-link"
                      href="https://bit.ly/REGISTRATION_ISIF_2023"
                    >
                      Registration
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      title="Winner"
                      className="nav-link"
                      href="https://drive.google.com/drive/folders/1h04ED_n4wkPIHJUyoJIbnebyijpg5tTm?usp=sharing"
                    >
                      Winner
                    </a>
                  </li> */}
                </ul>
                {/* <a
                  className={`btn_get btn_hover ${hbtnClass}`}
                  href="https://bit.ly/REGISTRATION_ISIF_2022"
                >
                  ISIF Registration
                </a> */}
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
