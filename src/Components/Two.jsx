import React from 'react';
import m from './images/earncoma.png';
// import { Slide } from 'react-awesome-reveal';
const Two = () => {
  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="wrmg">
              <div className="mbm">Early Salary Access </div>
              <div className="down">
                Get instant access to your salary, take control of your finances
                and embrace the freedom of managing your money on your own terms
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="px-5 ">
              <img src={m} alt="" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
