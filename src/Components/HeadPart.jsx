import React from 'react';
import g from './images/google.png';
import a from './images/apple.png';
import h from './images/hnhn.png';
const HeadPart = () => {
  return (
    <div className="texture">
      <div className="container pt-3">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className=" heightss">
              <div className="kiru">
                <div className="lock">
                  One App,{' '}
                  <span style={{ color: '#ED1B61' }}>Everything Money</span>{' '}
                </div>
                <div className="we_make">
                  Make money moves with Black. Get paid from anywhere, access
                  your salary anytime, manage and grow your wealth
                </div>
                <div className="google_app">
                  <img src={g} alt="" className="btns" />
                  <img src={a} alt="" className="btns mmm" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="">
              <img src={h} alt="" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadPart;
