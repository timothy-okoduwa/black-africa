import React from 'react';
import m from './images/momo.png';
import mo from './images/moov.png';
import o from './images/orange.png';
import a from './images/airtel.png';
import mp from './images/mp.png';
import wa from './images/wave.png';
import fm from './images/fm.png';
import tm from './images/image 51.png';
const Clientel = () => {
  return (
    <div className="clientel">
      <div className="container">
        <div className="built">Built on top of Mobile Money</div>
        <div className="fundd">
          Fund your black wallet directly from any mobile money wallet
        </div>
        <div>
          <div className="row mt-4">
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={m} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={o} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={mo} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={a} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={mp} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={wa} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={fm} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="centt">
                <div>
                  <img src={tm} alt="" class="black-and-white-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientel;
