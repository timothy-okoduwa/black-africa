import React from 'react';
import '../pages/Black/Black.css';
import a from './images/blbl.svg';
import g from './images/google.png';
import p from './images/apple.png';
import { useLocation } from 'react-router-dom';
const Footer = () => {
  const location = useLocation();

  const hideAllFotter =
    location.pathname.startsWith('/confirm') ||
    location.pathname.startsWith('/verified');
  return (
    <>
      {hideAllFotter ? null : (
        <div>
          <div className="container">
            <div className="holyDrill">
              <div className="jibb">
                <div>
                  <div>
                    <img src={a} alt="" />
                  </div>
                  <div className="copyright niboo">
                    © 2023 <b>Black</b> All right reserved{' '}
                  </div>
                </div>
                <div className="d-flex niboo">
                  <div className="ghgh niboo">
                    <img
                      src={g}
                      alt=""
                      style={{ width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="ghgh mx-3  niboo">
                    <img
                      src={p}
                      alt=""
                      style={{ width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              <div className="bullocks">
                <hr />
                <div className="copyright ">
                  © 2023 <b>Black</b> All right reserved{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Footer;
