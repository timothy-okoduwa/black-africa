import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import a from '../images/logo1.svg';
import { Link as ScrollLink } from 'react-scroll';
// import Dropdown from 'react-bootstrap/Dropdown';

import { BsGlobe } from 'react-icons/bs';
// const item = [{ language: 'EN' }, { language: 'CM' }];

const NavBar = ({ step, setStep }) => {
  const [isMobile, setIsMobile] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState('EN');
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getScrollToValue0 = () => {
    return isMobile ? 'scott0' : 'earn';
  };
  const getScrollToValue = () => {
    return isMobile ? 'scott' : 'earn';
  };
  const getScrollToValue2 = () => {
    return isMobile ? 'scott2' : 'earn';
  };
  const getScrollToValue3 = () => {
    return isMobile ? 'scott3' : 'earn';
  };
  const getScrollToValue4 = () => {
    return isMobile ? 'scott4' : 'earn';
  };

  const getOffsetValue = () => {
    return isMobile ? -3 : -130;
  };
  const earnnn0 = () => {
    setStep(1);
  };
  const earnnn = () => {
    setStep(2);
  };
  const savvvv = () => {
    setStep(3);
  };
  const invesrrt = () => {
    setStep(4);
  };
  const growwww = () => {
    setStep(7);
  };
  // const handleLanguageChange = (language) => {
  //   setSelectedLanguage(language);
  // };

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ background: '#000000' }}
        className="pt-4 pb-4"
      >
        <Container>
          <Navbar.Brand className="width">
            <div>
              <div style={{ color: 'white' }}>
                <img src={a} alt="" />
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto widdd">
              {/* <ScrollLink
                activeClass="active"
                to={getScrollToValue0()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={earnnn0}
              >
                <div className="lowe_screen also">Mobile Wallet</div>
              </ScrollLink> */}

              {/* <ScrollLink
                activeClass="active"
                to={getScrollToValue()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={earnnn}
              >
                <div className="lowe_screen">Earn</div>
              </ScrollLink> */}
              {/* <ScrollLink
                activeClass="active"
                to={getScrollToValue2()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={savvvv}
              >
                <div className="lowe_screen">Save</div>
              </ScrollLink> */}
              {/* <ScrollLink
                activeClass="active"
                to={getScrollToValue3()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={invesrrt}
              >
                <div className="lowe_screen">Invest </div>
              </ScrollLink> */}
              {/* <ScrollLink
                activeClass="active"
                to={getScrollToValue4()}
                spy={true}
                smooth={true}
                offset={getOffsetValue()}
                duration={300}
                style={{ textDecoration: 'none' }}
                onClick={growwww}
              >
                <div className="lowe_screen">Grow</div>
              </ScrollLink> */}
              <ScrollLink
                activeClass="active "
                to="waitlist"
                spy={true}
                smooth={true}
                offset={-10}
                duration={300}
                style={{ textDecoration: 'none' }}
              >
                <div className="lowe_screen holy pt-3">Join waitlist</div>
              </ScrollLink>
            </Nav>
            <div className="but_Holder">
              <div className="button_nav">
                <div>
                  {/* <Dropdown>
                    <Dropdown.Toggle
                      className="language_switch"
                      id="dropdown-basic"
                    >
                      <BsGlobe className="mx-1" />
                      {selectedLanguage}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {item.map((it, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handleLanguageChange(it.language)}
                        >
                          {it.language}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <button className="language_switch">
                    {' '}
                    <BsGlobe className="mx-1" />
                    EN
                  </button>
                </div>

                <ScrollLink
                  activeClass="active"
                  to="waitlist"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={300}
                  style={{ textDecoration: 'none' }}
                >
                  <button className="join_witlist">Join Waitlist</button>
                </ScrollLink>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
