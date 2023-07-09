import React from 'react';
import m from './images/invest.png';
// import { Slide } from 'react-awesome-reveal';
const Four = () => {
  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="wrmg">
              <div className="mbm">Secure Investments </div>
              <div className="down">
                Discover trusted investment opportunities, protect your assets,
                and achieve long-term prosperity, Mutual funds, life insurance &
                alternative assets
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

export default Four;
